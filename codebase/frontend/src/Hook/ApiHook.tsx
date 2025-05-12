import axios from "axios";
import { useState } from "react"

type ApiResponse = [
    boolean, // isLoading
    string,  // error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (endpoint: string) => Promise<any> // callApi function
];

const useApiHook = ():ApiResponse =>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const callApi = async (endpoint:string) =>{
        try{
            setIsLoading(true);
            const {data} = await axios.get(endpoint);
            setIsLoading(false);
            return data;
        }catch(err){
            if(axios.isAxiosError(err)){
                setIsLoading(false);
                setError("Oops! We couldn’t retrieve your account data. Please refresh or try later.");
            }
            else{
                setIsLoading(false);
                setError("Error..");
            }   
            throw err;
        }
    }
    return [isLoading, error, callApi];
}

export {useApiHook}

