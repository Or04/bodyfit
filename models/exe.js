const mongoose = require('mongoose');


const schema={
    category:String,
    name: String,
    image:  String,
    level:  Number,
    sets: Number  ,
    bmi: Number,
    upper_body:Number,
    lower_body: Number,
    middle_body: Number
}


const user_schema = mongoose.Schema(schema);//Nat-> Schema
const newExe=mongoose.model('exercises',user_schema);
module.exports=newExe;

