const supertest = require('supertest');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.sendFile('index.html', { root: '.' }));

describe('Index HTML Load Test', () => {
  it('should load the index.html page successfully', async () => {
    const response = await supertest(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<title>Haiku Home</title>');
  });
});