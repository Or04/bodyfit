const mongoose = require('mongoose');



const schema={
full_name:String,
password:  String,
email: String,
bmi: Number,
height:Number,
weight: Number,
upper_body: Number,
lower_body: Number ,
middle_body:  Number
}

const user_schema = mongoose.Schema(schema);//Nat-> Schema
const newUser=mongoose.model('trainees',user_schema);
module.exports=newUser;