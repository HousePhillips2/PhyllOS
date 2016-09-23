////////    NODE MODULES    ////////
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser')

///////    SERVER MODULES    ///////
var postData   = require('./controllers/post-data');


// MOUNT middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// MOUNT subapp routes
app.use('/post-data', postData);

app.set('port', 1991);
app.listen(app.get('port'), function(req, res){
  console.log('Express app listening on port:', app.get('port'));
});


module.exports.app = app;
