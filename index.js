var express = require('express');
var router = express.Router();
const datab = require('../db');

/* GET home page. */
router.get('/datas/:theString',(req, res, next)=>{


    datab.find({theString: req.params._theString},function (err, result) {
        if (result.length== 0)
        {
            let theString =req.params.theString
            let result1 = new datab({
                string: theString,
                length: theString.length
            });
            result1.save();
            res.json(result);
        }
        else {

            res.json(result);
        }
    });

});
router.get('',(req, res, next)=>{
res.json(datab);
});
//POST
router.post('/datas', function(req, res, next){
    datab.find({theString: req.body._theString},function (err, result) {
        if (result.length==0) {
            let theString = req.body.theString
            let result1 = new datab({
                string: theString,
                length: theString.length
            });
            result1.save();
            res.json(result);
        }
        else {

            res.json(result);
        }
    });
    if (result1 =  null){
        res.json({msg :'Please add string'});
    }
});
router.delete('/datas/:id',(req, res, next)=>{
    datab.remove({_id: req.params.id}, function (err,final) {
        if (err) {

            res.json(err);
        }
        else {
            res.json(final);
        }
    });
});
module.exports = router;