import { getArrayOfId, getArrayOfTotal, getFullAccountDetails } from "../Helper/GetResponse";
import { Account, DueCharges } from "../Types/type";

 const testData:DueCharges[] = [
        { id: "D-0001", accountId: "A-0001", date: "2025-04-01", amount: 10 },
        { id: "D-0002", accountId: "A-0001", date: "2025-04-08", amount: 20 },
        { id: "D-0003", accountId: "A-0003", date: "2025-03-25", amount: -15 },
        { id: "D-0004", accountId: "A-0003", date: "2025-04-05", amount: -25 }
    ]

const testAccount:Account[] = [{
        id: "A-0001",
        type: "ELECTRICITY",
        address: "1 Greville Ct, Thomastown, 3076, Victoria",
        meterNumber: "1234567890",
    },
    {
        id: "A-0002",
        type: "GAS",
        address: "74 Taltarni Rd, Yawong Hills, 3478, Victoria",
        volume: 3034
    },
    {
        id: "A-0003",
        type: "ELECTRICITY",
        address: "44 William Road, Cresswell Downs, 0862, Northern Territory",
        meterNumber: "12345672313",
    },]

//Test case for array with unique id
test('it returns an array of unique Id', ()=>{     
        const expectedOutput = ["A-0001", "A-0003"];
        const actualOutput = getArrayOfId(testData);
        
        expect(actualOutput).toEqual(expectedOutput);
});

//Test case for total of each account
describe('getTotalOfEachAccount', ()=>{
    it('calculates the total of each account', ()=>{
     
        const expectedOutput = [{id: "A-000", accountId: "A-0001", totalAmount: 30}, {id: "A-001", accountId: "A-0003", totalAmount: -40},];
        const actualOutput = getArrayOfTotal(testData);
        
        expect(actualOutput).toEqual(expectedOutput);
    })
})

//Final Response of each account
test('get final response of each account', ()=>{
    const expectedOutput = [{
    id: "A-0001",
    type: "ELECTRICITY",
    address: "1 Greville Ct, Thomastown, 3076, Victoria",
    meterNumber: "1234567890",
    dueAmount: 30
  },
  {
    id: "A-0003",
    type: "ELECTRICITY",
    address: "44 William Road, Cresswell Downs, 0862, Northern Territory",
    meterNumber: "12345672313",
    dueAmount: -40
  }]

  const actualOutput = getFullAccountDetails(testData, testAccount);
  expect(actualOutput).toEqual(expectedOutput);
})