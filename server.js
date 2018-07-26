var express = require ('express'),
  path = require('path'),
  app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'bunch')));

var server=app.listen(app.get('port'), function(){
  console.log('Server is running on 3000');
})
