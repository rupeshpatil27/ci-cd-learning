const request = require('supertest');
const app = require('../app');

describe('GET /add', () => {
  it('should return sum of two numbers', async () => {
    const response = await request(app)
      .get('/add?a=2&b=3');

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(5);
  });
});
