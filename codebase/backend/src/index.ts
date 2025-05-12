import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { router as accounts } from './Routes/accounts';
import { router as payment } from './Routes/payment';


const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use('/accounts', accounts);
app.use('/payment', payment);

app.listen(port, ()=>{
    console.log("App Listening on port: "+port);
});

export default app;