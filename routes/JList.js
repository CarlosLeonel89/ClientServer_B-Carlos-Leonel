var express = require('express');
var router = express.Router();

const jlist = require('../services/JList');

/* GET JList listing. */
router.get('/', async function(req, res, next) {
  try{
      res.json(await jlist.getMultiple(req.query.page));
  } catch(err){
    console.error('Error' + err.message);
    next(err);
  }
});

module.exports = router;