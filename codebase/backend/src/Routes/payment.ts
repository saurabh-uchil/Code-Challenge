import express, { Request, Response } from 'express';
const router = express.Router();


/* router.get('/', async (req: Request ,res: Response)=>{
    res.json({message:"Welcome to payments..."});
}); */

router.post('/', (req: Request ,res: Response)=>{
    const {amount, cardNumber, expiry, cvv} = req.body;
    if(amount === ''|| cardNumber === '' || expiry === '' || cvv === ''){
        res.status(400).json({ message:"Validation Failed"});
    }else{
        res.status(200).json({ message:'Payment Successful'});
    }
});

export {router}