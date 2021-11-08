const { Router } = require('express');
const FeelingService = require('../services/FeelingService');

module.exports = Router()

  .post('/', async(req, res, next) => {
    try {
      const feeling = await FeelingService.createFeelings(req.body.anger, req.body.confusion);
      res.send(feeling);
    } catch(err) {
      next(err);
    }
  });
