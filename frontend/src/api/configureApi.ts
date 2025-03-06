import axios from "axios";
import { refreshTokenRequest, logoutRequest } from "./authRequests";
import { serverBaseUrl } from "./common";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: serverBaseUrl,
    withCredentials: true,
});

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true;
            try {
                const refreshResponse = await refreshTokenRequest();
                Cookies.set("accessToken", refreshResponse.data.access_token)
                
                return api(originalRequest);
            } catch (refreshError: any) {
                const response = refreshError?.response;

                if(response?.status == 401 && response?.data?.message === "Código de atualização inválido"){
                    Cookies.remove("accessToken");
                }

                logoutRequest();
                
                console.error("Falha ao renovar o token:", refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;