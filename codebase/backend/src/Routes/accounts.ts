import express, { Request, Response } from 'express';
import { MOCK_DUE_CHARGES_API } from '../MockData/dueChargesAPIMock';
import { MOCK_ENERGY_ACCOUNTS_API } from '../MockData/energyAccountsAPIMock';
import { getFullAccountDetails } from '../Helper/GetResponse';

const router = express.Router();

router.get('/' , async (req: Request, res: Response)=>{
    try{
        const dueCharges = await MOCK_DUE_CHARGES_API();
        const account = await MOCK_ENERGY_ACCOUNTS_API();
        const response = getFullAccountDetails(dueCharges, account);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }
});

export {router}