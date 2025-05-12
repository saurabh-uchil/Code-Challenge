import { useEffect, useState, type FunctionComponent, type ReactElement } from "react"
import { Account } from "./AccountCard";
import type { AccountDetails } from "../Type/Account";
import { useApiHook } from "../Hook/ApiHook";
import "../CSS/Home.css";
import { Loader } from "./Loader";
import { loadAccountsMessage } from "../Data/Intro";
import axios from "axios";

type Props = {
    intro : string;
}

export const Home: FunctionComponent<Props> = (props:Props):ReactElement =>{
    
    const {VITE_PORT,VITE_ACCOUNTS_URL, VITE_PAYMENTS_URL} = import.meta.env;
    
    const [accounts, setAccounts] = useState<AccountDetails[]>([]);
    const [filter, setFilter] = useState<string>('');
   /*  const [isLoading, setIsLoading] = useState<boolean>(false); */
    const [isLoading, error, callApi] = useApiHook();
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const accountURL = "http://localhost:"+VITE_PORT+VITE_ACCOUNTS_URL;
                /* setIsLoading(true);
                const {data} = await axios.get('http://localhost:3000/accounts');
                setAccounts(data);
                setIsLoading(false); */
                const data = await callApi(accountURL);
                //console.log("Data "+data);
                setAccounts(data);
            }catch(err){
                if(axios.isAxiosError(err)){
                    console.log("Axios Error");
                }
                else{
                   
                    console.log("Error..");
                }   
            }
        }
        fetchData();
    }, []);

    let data;
    if(filter !=""){
        data = accounts.filter((account)=> account.type === filter);
    }else{
        data = accounts;
    }

    const account = data.map((account, i)=>{
        return <div key={i}>
            <Account account={account} />
        </div>
    })

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setFilter(e.target.value);
    }

    let results;
    if(isLoading){
        results = <Loader message={loadAccountsMessage}/>
    }else if(error!=''){
        results = <div className="error">{error}</div>
    }else{
        results = <div>{account}</div>
    }

   
    
    console.log("http://localhost:"+VITE_PORT+VITE_ACCOUNTS_URL);
    console.log(VITE_ACCOUNTS_URL);
    console.log(VITE_PAYMENTS_URL);

    return(
        <div className="home">
        
        <p className="intro">{props.intro}</p>    
        
        <div className="searchFilter">
            <label>Filter By</label> 
            <select onChange={handleChange}>
                <option value={""}>SHOW ALL</option>
                <option value={"ELECTRICITY"}>ELECTRICITY</option>
                <option value={"GAS"}>GAS</option>
            </select>
        </div>

        <div className="accountsDiv">
            {results}
        </div>

        </div>
    )
}