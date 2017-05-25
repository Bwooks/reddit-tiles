var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./router.js');

app.set('view engine', 'ejs');
app.use(routes);
app.use(express.static(__dirname));
app.listen(port,function() {
    console.log("Listening on port", port);
});