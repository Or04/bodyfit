var express = require('express'),
 app = express(),
 traineesCtl = require('./controllers/traineesCtl'),
 //bodyParser = require('body-parser'),
 port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*routes*/

app.use('/', express.static('./public'));//for API
app.set('port',port);
app.use(
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.set("Content-Type", "application/json");
        next();
 });


 app.post('/createUser', (req, res) => {
  traineesCtl.createUser(req.body.userName, req.body.password, req.body.email).
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
  traineesCtl.setUserBlockList(req.body.user, req.body.upper_body, req.body.lower_body, req.body.middle_body).then((result, error) => {
    if(result)
      res.status(200).json({"message": "blocklist updated"});
  });
});


app.all('*', (req, res, next) => {
    res.send({
        'appName': "body-fit",
        'by':"natali mahmmali & or hadad",
        'git repository':"https://github.com/nataliemahmalie/bodyfit"})
})



app.listen(port, () => console.log(`listening on port ${port}`))
