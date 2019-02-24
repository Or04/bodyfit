var   express   = require('express'),
app       = express(),
userCtl = require('./controllers/user.ctl'),
bodyParser = require('body-parser'),
port      = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port',port);
app.use('/', express.static('./public'));
app.use(
 (req,res,next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
 next();
 });


app.post('/createUser', (req, res) => {
  userCtl.createUser(req.body.userName, req.body.password, req.body.email).
  then((result, error) => {
    if(result.id)
    res.status(200).send(result);
    else if(result == "invalid input")
    res.status(200).json({"error" :"invalid input"});
    else
    res.status(200).json({"message" : true});
  });
});



app.post('/setUserBlockList', (req, res) =>{
  userCtl.setUserBlockList(req.body.userID, req.body.upper, req.body.middle, req.body.lower, req.body.long, req.body.short).then((result, error) => {
    if(result)
      res.status(200).json({"message": "blocklist updated"});
  });
});




app.all('*', (req, res, next) => {
  res.send({
      'appName': "body-fit",
      'by':"natali mahmmali & or hadad",
      'git repository':"https://github.com/nataliemahmalie/bodyfit"});
});


app.listen(port);
console.log(`listening on port ${port}`);