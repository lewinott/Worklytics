import axios from 'axios';
import { serverBaseUrl } from './common';

export const createTicketRequest = async (
    number: string, 
    status: string, 
    user_sub: string, 
    access_token: string
) => {
    const creation_date = new Date().toLocaleDateString().replaceAll("/", "-");
    const creation_time = new Date().toLocaleTimeString();

    const response = await axios.post(`${serverBaseUrl}/auth/token/`, {
        "number": number,
        "status": status,
        "creation_date": creation_date,
        "creation_time": creation_time,
        "finished": false,
        "user": user_sub
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
        withCredentials: true,
    });

    return response;
};

export const getTicketRequest = async (
    user_sub: string, 
    status: string|null, 
    number: string|null, 
    access_token: string
) => {
    const params = new URLSearchParams();
    
    params.append("user", user_sub);
    if (status) params.append("status", status); 
    if (number) params.append("number", number);

    const response = await axios.get(`${serverBaseUrl}/auth/token/?${params.toString()}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
        withCredentials: true 
    });
    
    return response;
};