export type Account = {
    id: string,
    type: string,
    address: string,
    meterNumber?: string,
    volume?: number
}

export type DueCharges = {
    id: string, 
    accountId: string, 
    date: string, 
    amount: number 
} 