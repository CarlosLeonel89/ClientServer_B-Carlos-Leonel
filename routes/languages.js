var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

const languages = require('../services/languages');

/* GET languages listing. */
router.get('/', async function(req, res, next) {
  try{
      res.json(await languages.getMultiple(req.query.page));
  } catch(err){
    console.error('Error' + err.message);
    next(err);
  }
});

module.exports = router;

router.post('/',async function(req,res,next){
  try{
    res.json(await languages.create(req.body));
  }catch (error){
    console.log('Error while creating a language', error.message);
    next(error);
  }
});