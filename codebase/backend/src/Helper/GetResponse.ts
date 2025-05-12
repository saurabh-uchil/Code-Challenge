import { Account, DueCharges } from "../Types/type";

const getArrayOfTotal = (data: DueCharges[]) =>{
    let finalArray = [];

    let idArray = getArrayOfId(data);

    for(let element in idArray){
        let sum = 0;
        for(let charges in data){
            if(idArray[element] === data[charges].accountId){
                sum += data[charges].amount;
            }
        }
        
        let item = {id: `A-00${element}`, accountId: idArray[element], totalAmount: sum}
        finalArray.push(item);
    }

    return finalArray;
}

const getArrayOfId = (data: DueCharges[]) =>{
    let idArray: string[] = [];
    const newArray = data.map(e => e.accountId);

    for(let element in newArray){
        if(idArray.length == 0){
            idArray.push(newArray[element]);
        }else{
            if(!idArray.includes(newArray[element])){
                idArray.push(newArray[element]);
            }
        }
    }
    return idArray;
}

const getFullAccountDetails = (dueCharges: DueCharges[], accounts: Account[]) =>{
    const totalsArray = getArrayOfTotal(dueCharges);
    let responseArray = []
    for(let element in totalsArray){
        for(let account in accounts){
            if(totalsArray[element].accountId === accounts[account].id){
                responseArray.push({...accounts[account], dueAmount: totalsArray[element].totalAmount});
            }
        }
    }
    return responseArray;
}

export {getFullAccountDetails}
