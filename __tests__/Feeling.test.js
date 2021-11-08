const pool = require('../lib/utils/pool');
const twilio = require('../lib/utils/twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const FeelingService = require('../lib/services/FeelingService');
const Feeling = require('../lib/models/Feeling');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));

describe('test Feeling.js queries', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(async() => {
    await FeelingService.createFeelings(2);
  });

  it('creating feelings', async() => {
    const feeling = await Feeling.insert(8, 8);
    expect(feeling).toEqual({
      id: '2',
      anger: 8,
      confusion: 8
    });
  });
});
