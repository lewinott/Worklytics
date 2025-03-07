import { serverBaseUrl } from './common';
import { formatDateToUS } from '../utils/utils';
import api from './configureApi';

export const createTicketRequest = async (
    number: string, 
    status: string, 
    userSub: string, 
    accessToken: string
) => {
    const creation_date = new Date().toLocaleDateString().replaceAll("/", "-");
    const creation_time = new Date().toLocaleTimeString();

    await api.post(`${serverBaseUrl}/tickets/`, {
        "number": number,
        "status": status,
        "creation_date": formatDateToUS(creation_date, "-"),
        "creation_time": creation_time,
        "finished": false,
        "user": userSub
    }, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        withCredentials: true,
    });
};

export const getTicketRequest = async (
    userSub: string,
    accessToken: string,
    status: string | null,
    number: string | null
) => {
    const params = new URLSearchParams();
    
    params.append("user", userSub);
    if (status) params.append("status", status); 
    if (number) params.append("number", number);

    const response = await api.get(`/tickets/?${params.toString()}`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        withCredentials: true 
    });
    
    return response;
};

export const patchTicketRequest = async (
    number: string, 
    status: string,
    idTicket: number,
    accessToken: string,
) => {
    const response = await api.patch(`/tickets/${idTicket}/`, {
        "number": number,
        "status": status,
    }, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        withCredentials: true,
    });

    return response;
};

export const finishTicketRequest = async (
    finished: boolean,
    idTicket: number,
    accessToken: string,
) => {
    const response = await api.patch(`${serverBaseUrl}/tickets/${idTicket}/`, {
        "finished": finished,
    }, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        withCredentials: true,
    });

    return response;
};