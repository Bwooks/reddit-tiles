var express = require('express');
var router = express.Router();
var path = require('path');
var fetchImagesFromSubreddit = require('./controllers/imagesController.js');
router.get('/', function(req,res){
    var response = fetchImagesFromSubreddit('pics');
        response.then(function(object){
            var picsObject = object.data.data.children;
            res.render(path.join(__dirname,'views/index.ejs'), {
                pics: picsObject,
            });    
        })
});

module.exports = router;