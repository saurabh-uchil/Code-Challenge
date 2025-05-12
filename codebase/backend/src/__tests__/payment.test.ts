import request from 'supertest';
import app from '../index';

describe('testing the payment endpoint', ()=>{

    it('testing the post request pass scenario', async ()=>{
        const validPayload = {amount: "20", cardNumber:"1234-1234-1234-1234", expiry:"10/06", cvv:"232"}
        const response = await request(app).post('/payment').send(validPayload).set('Accept', 'application/json');

        expect(200).toBe(response.status);
    });

    it('testing the post request fail scenario', async ()=>{
        const validPayload = {amount: "20", cardNumber:"", expiry:"10/06", cvv:"232"}
        const response = await request(app).post('/payment').send(validPayload).set('Accept', 'application/json');

        expect(400).toBe(response.status);
    });
});


