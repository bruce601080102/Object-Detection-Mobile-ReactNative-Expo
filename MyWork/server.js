
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'banana_test'
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("start");
})

con.connect(function(error) {
  if(error) {
    return console.log('error:' + error.message);
  }
  else {
    console.log('Open the database connection!');
  } 

})

app.get('/select', async function (req, res) {
  con.query("SELECT * FROM `banana_python` ORDER BY `banana_python`.`id` DESC LIMIT 0 , 1", function (error, rows, fields){
    if(error) {
      console.log(error);
    }
    else {
      res.send(rows);
    } 
  });
});
app.get('/select_camstate', async function (req, res) {
  con.query("SELECT `state` FROM `controll_cam` WHERE `id` = 1", function (error, rows, fields){
    if(error) {
      console.log(error);
    }
    else {
      res.send(rows);
    } 
  });
});

app.post('/insert', function (req, res) {
  con.query("insert into banana(pic, pic_num) values ('"+ req.body.photo +"', '"+ req.body.photoNum +"')", function (error, rows, fields){
    if(error) {
      console.log(error);
    }
    else {
      res.send(rows);
    } 
  }); 
});

app.post('/update', function (req, res) {
  con.query("update `controll_cam` SET `state`= '" + req.body.state + "' WHERE `id` = 1", function (error, rows, fields){
    if(error) {
      console.log(error);
    }
    else {
      res.send(rows);
    } 
  }); 
});