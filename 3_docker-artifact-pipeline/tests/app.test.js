const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  it('should add 10 + 20 to equal 30', async () => {
    const res = await request(app).get('/add?num1=10&num2=20');
    expect(res.body.result).toBe(30);
  });
});