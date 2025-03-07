import axios from "axios";

export const serverBaseUrl: string = "http://localhost:8000";

export const handleAxiosError = (error: any, openPopup?: (type: string, message: string) => void) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            if(!error.response.data.message){
                let message = ""
                Object.entries(error.response.data).map((value: any) => {
                    const text = value[1][0];
                    message += text + "\n";
                })
                // openPopup("error", message);
                console.log("error: " + message)  
            }else{
                // openPopup("error", err.response.data.message);  
                console.log("error: " + error.response.data.message)
            }
            
        } else {
            // openPopup("error", err.message);
            console.log("error: " + error.message)
        }
    } else {
        // openPopup("error", "Erro inesperado!");
        console.log("error: ", "Erro inesperado!")
    }
};