export type AccountDetails = {
    id: string,
    type: string,
    address: string,
    meterNumber?: number,
    volume?:number,
    dueAmount: number
}

export type Payment = {
    id:string,
    amount: number, 
    date: string 
}
