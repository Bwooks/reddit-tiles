require('babel-register')({
    presets: ['react']
});
var express = require('express');
var router = express.Router();
var path = require('path');
var fetchImagesFromSubreddit = require('./controllers/imagesController.js');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var Home = require('./views/components/Home.js');

router.get('/', function(req,res){
    var component = ReactDomServer.renderToString(React.createElement(Home));
    res.send(component);
    /*
    var response = fetchImagesFromSubreddit('pics');
        response.then(function(object){
            var picsObject = object.data.data.children;
            res.render(path.join(__dirname,'views/index.ejs'), {
                pics: picsObject,
            });    
        })
    */
});

module.exports = router;