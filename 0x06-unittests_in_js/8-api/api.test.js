/**
 * Test correct status code
 * Test correct result
 */
const { expect } = require('chai');
const app = require('./api');
const index = require('./api');
const request = require('request');

describe('GET /', () => {
  it('should respond with: Welcome to the payment system', (done) => {
    request(app)
      .get('/')
      .expect('Content-type', /text\/plain/)
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done()
      });
  });
});