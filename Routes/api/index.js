const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({test: 'Test API'});
})

module.exports = router;