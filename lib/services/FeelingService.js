const Feeling = require('../models/Feeling');
const { sendSms } = require('../utils/twilio');

module.exports = class FeelingService {

  static async createFeelings(anger, confusion) {
    await sendSms(
      process.env.FEELING_HANDLER_NUMBER,
      `This project making me ${anger} out of 10 anger and ${confusion} out of 10 confused.`
    );
    const feeling = await Feeling.insert(anger, confusion);
    return feeling;
  }

  static async getFeelingsById(id) {
    const feeling = await Feeling.getById(id);
    return feeling;
  }

};
