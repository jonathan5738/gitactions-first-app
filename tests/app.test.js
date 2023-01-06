const request = require('supertest') 
const { app } = require('../app')

describe('root router suite', () => {
    test('should return 200 status code', async () => {
        const response = await request(app).get('/').expect(200)
    })
    test('should return object with message field if request is successfull', async() => {
        const response = await request(app).get('/').expect(200)
        expect(response.body).toBeDefined()
    })
})

