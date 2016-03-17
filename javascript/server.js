var path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.join(__dirname, '/../')));



app.get('/', function(request,response){
	response.redirect('/index.html');
});

app.listen(3000,function(){
	console.log('listening on port 3000')
});