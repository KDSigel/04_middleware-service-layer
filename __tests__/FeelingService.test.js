const pool = require('../lib/utils/pool');
const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const FeelingService = require('../lib/services/FeelingService');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));

describe('FeelingService tests', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  beforeEach(async() => {
    await FeelingService.createFeelings(2, 2);
  });
  
  it('should create an item', async() => {
    const feeling = await FeelingService.createFeelings(5, 5);
    expect(feeling).toEqual({ id: '2', anger: 5, confusion: 5 });
  });
});
