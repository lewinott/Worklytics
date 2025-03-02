import axios from 'axios';
import { serverBaseUrl } from './common';

export const loginRequest = async (code: string) => {
    const response = await axios.post(`${serverBaseUrl}/auth/token/`, JSON.stringify({ code }), {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response;
};