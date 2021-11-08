const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));

describe('04_middleware-service-layer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

it('creates new feelings in our database and sends a text message', () => {
  return request(app)
    .post('/api/v1/feelings')
    .send({ anger: 8, confusion: 8 })
    .then(res => {
      // expect(createMessage).toHaveBeenCalledTimes(1);
      expect(res.body).toEqual({
        id: expect.any(String),
        anger: 8, 
        confusion: 8
      });
    });
});
});
