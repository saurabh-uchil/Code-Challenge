import { useEffect, useState, type FunctionComponent, type ReactElement } from "react"
import { Account } from "./AccountCard";
/* import type { AccountDetails } from "../Type/Account"; */
import { useApiHook } from "../Hook/ApiHook";
import "../CSS/Home.css";
import { Loader } from "./Loader";
import { loadAccountsMessage } from "../Data/Intro";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccounts, type RootState } from "../Store/store";
import { useSelector } from "react-redux";

type Props = {
    intro : string;
}

export const Home: FunctionComponent<Props> = (props:Props):ReactElement =>{
    
    //Environmetn Variables
    const {VITE_PORT,VITE_ACCOUNTS_URL} = import.meta.env;
    
    //Local State
    const [filter, setFilter] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    //Custom Hook
    const [isLoading, error, callApi] = useApiHook();
    
    const dispatch = useDispatch();

    //Getting Accounts from Redux store
    const accounts = useSelector((state:RootState)=> state.accounts);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const accountURL = "http://localhost:"+VITE_PORT+VITE_ACCOUNTS_URL;
                const data = await callApi(accountURL);

                dispatch(setAccounts(data));

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
    
    //Filter By Type
    let data;
    if(filter !=""){
        data = accounts.filter((account)=> account.type === filter);
    }else{
        data = accounts;
    }

    //Search By Address
    const searchAddress = data.filter((account)=> account.address.includes(address));
    
    //Final Results
    const account = searchAddress.map((account, i)=>{
        return <div key={i}>
            <Account account={account} />
        </div>
    })

    //On Select
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setFilter(e.target.value);
    }

    //On Search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value);
        setAddress(e.target.value);
    }

    let results;

    //Loading accounts
    if(isLoading){
        results = <Loader message={loadAccountsMessage}/> 
    }
    //On Error
    else if(error!=''){
        results = <div className="error">{error}</div>
    }
    //Results
    else{
        results = <div>{account}</div>
    }

    return(
        <div className="home">
        
        <p className="intro">{props.intro}</p>    
        


        <div className="searchFilter">
            <div className="addressSearch">
                <input type="text"  placeholder="Search By Address" onChange={handleSearch} value={address}/>
            </div>
            
            <div>
                <label>Filter By</label> 
                <select onChange={handleChange}>
                    <option value={""}>SHOW ALL</option>
                    <option value={"ELECTRICITY"}>ELECTRICITY</option>
                    <option value={"GAS"}>GAS</option>
            </select>
            </div>            
        </div>

        <div className="accountsDiv">
            {results}
        </div>

        </div>
    )
}