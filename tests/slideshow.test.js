const supertest = require('supertest');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.sendFile('index.html', { root: '.' }));

describe('Slideshow Functionality Tests', () => {
  it('should load the slideshow correctly', async () => {
    const response = await supertest(app).get('/slideshow');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<div id="slideshow">');
  });

  it('should move to the next haiku when clicking Next Haiku button', async () => {
    const response = await supertest(app).get('/nextHaiku');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<div>New Haiku Content</div>');
  });

  it('should move to the previous haiku when clicking Previous Haiku button', async () => {
    const response = await supertest(app).get('/prevHaiku');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<div>Previous Haiku Content</div>');
  });
});