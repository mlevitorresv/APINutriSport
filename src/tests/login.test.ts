import { app } from "../app";
import request from 'supertest';

describe('login tests', () => {
    it('should return a json with text credentials invalid', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": "email", "password": "password" })

        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ "error": "Unauthorized: Invalid credentials" })
    })

    it('should return a token', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": process.env.TEST_USER, "password": process.env.TEST_PASSWORD })

        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('token')
    })
})