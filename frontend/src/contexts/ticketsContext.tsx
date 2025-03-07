// Libs
import React, { createContext, useContext, useState } from "react";

// Utils
import { ticketType } from "../utils/types";
import { formatDateToBR } from "../utils/utils";

// Contexts
import { useAuth } from "./authContext";

// Requests
import { handleAxiosError } from "../api/common";
import { 
    finishTicketRequest, 
    getTicketRequest, 
    patchTicketRequest,
    createTicketRequest,
} from "../api/ticketsRequest";

interface TicketContextType {
    tickets: ticketType[];
    setTickets: React.Dispatch<React.SetStateAction<ticketType[]>>;
    textSearch: string;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
    filterStatus: string[];
    setFilterStatus: React.Dispatch<React.SetStateAction<string[]>>;
    checkAllTickets: boolean;
    setCheckAllTickets: React.Dispatch<React.SetStateAction<boolean>>;
    idTickets: number[];
    handleSetIdTickets: (id: number, remove?: boolean) => void;
    handleFinishTicket: (id: number) => Promise<void>;
    filteredTickets: ticketType[];
    handleGetTickets: () => Promise<void>;
    handleUpdateTicket: (id: number, statusValue: string, ticketNumber: string, checked: boolean) => Promise<void>;
    handleCreateTicket: (numberTicket: string, statusTicket: string) => Promise<void>;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

interface TicketProviderProps{
    children: React.ReactNode
}

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
    const [tickets, setTickets] = useState<ticketType[]>([]);
    const [textSearch, setTextSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState([""]);
    const [checkAllTickets, setCheckAllTickets] = useState(false);
    const [idTickets, setIdTickets] = useState<number[]>([]);

    const { getUserSub, getAccessToken } = useAuth();
    const userSub = getUserSub() || ""
    const accessToken = getAccessToken() || ""

    const handleFinishTicket = async (id: number) => {
        try {
            await finishTicketRequest(true, id, accessToken);
            handleGetTickets();
        } catch (error) {
            handleAxiosError(error);
        }
    };

    const filteredTickets = tickets.filter(ticket => {
        if (!textSearch.trim()) return true;

        const search = textSearch.toLowerCase();

        return [
            ticket.number?.toString(),
            ticket.status?.toLowerCase(),
            formatDateToBR(ticket.creation_date, "-").replaceAll("-", "/"),
            ticket.creation_time?.toString(),
        ].some(field => field?.toLowerCase().includes(search));
    }).filter(ticket => {
        const filterStringVoid = filterStatus.filter(s => s.trim() !== "");

        if (filterStringVoid.length === 0) return true;
        return filterStringVoid.includes(ticket.status?.toLowerCase());
    }).filter(ticket => !ticket.finished)

    const handleGetTickets = async () => {
        try{
            const { data } = await getTicketRequest(
                userSub, 
                accessToken,
                null, 
                null
            );
            setTickets(data);
        }catch(error){
            handleAxiosError(error);
        }
    }

    const handleUpdateTicket = async (
        id: number, 
        statusValue: string, 
        ticketNumber: string,
    ) => {
        try{
            await patchTicketRequest(
                ticketNumber, 
                statusValue, 
                id, 
                accessToken
            );
        }catch(error){
            handleAxiosError(error);
        }
    };

    const handleSetIdTickets = (id: number, remove: boolean = false) => {
        if (remove) {
            setIdTickets((prev) => prev.filter(ticketId => ticketId !== id));
        } else {
            setIdTickets((prev) => Array.from(new Set([...prev, id])));
        }
    }

    const handleCreateTicket = async (numberTicket: string, statusTicket: string) => {
        const userSub = getUserSub() || "";
        const accessToken = getAccessToken() || "";

        try{
            await createTicketRequest(
                numberTicket, 
                statusTicket, 
                userSub, 
                accessToken,
            );
            handleGetTickets();
        }catch(error){
            handleAxiosError(error);
        }
    }
    
    const contextValue = {
        tickets,
        setTickets,
        textSearch,
        setTextSearch,
        filterStatus,
        setFilterStatus,
        checkAllTickets,
        setCheckAllTickets,
        idTickets,
        handleSetIdTickets,
        handleFinishTicket,
        filteredTickets,
        handleGetTickets,
        handleUpdateTicket,
        handleCreateTicket,
    };

    return (
        <TicketContext.Provider value={contextValue}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTicket = () => {
    const context = useContext(TicketContext);
    if (!context) {
        throw new Error("useTicketContext must be used within a TicketProvider");
    }
    return context;
};
