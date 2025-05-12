import request from 'supertest';
import app from '../index';


test('testing the accounts endpoint', async ()=>{
    const response = await request(app).get('/accounts',);
    expect(response.status).toBe(200)
});

