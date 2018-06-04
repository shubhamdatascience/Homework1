var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/datas/:theString',(req, res, next)=>{
    let theString =req.params.theString
    let result = {
        string: theString,
        length: theString.length
    }

    res.json(result);

});
//add data
router.post('/datas', function(req, res, next){
    let theString = req.body.theString
    let result = {
        string: theString,
        length: theString.length
    }

    res.json(result);



});

module.exports = router;
