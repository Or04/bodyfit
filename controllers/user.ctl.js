const mongoose = require('mongoose');
var User = require('../models/user-schema'),
    promise = require('promise');

module.exports = {
  createUser,
  setUserBlockList
}


function setUserBlockList(user_id, upper, middle,  lower, long, short){
  return new promise((resolve, reject) =>{
  if(upper == true){
    console.log("upper");
    User.updateOne({"_id": user_id}, {"block_list.upper" : upper},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
  }
  if(middle == true){
    console.log("middle");
    User.updateOne({"_id": user_id}, {"block_list.middle" : middle},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
  }
  if(lower == true){
    console.log("lower");
    User.updateOne({"_id": user_id}, {"block_list.lower" : lower},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
  }
  if(long == true){
    console.log("long");
    User.updateOne({"_id": user_id}, {"long" : long},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
  }
  if(short == true){
    console.log("short");
    User.updateOne({"_id": user_id}, {"short" : short},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
  }
  User.updateOne({"_id": user_id}, {"password" : "1"},
  (err) => {
    if(err)
    console.log(`err: ${err}`);
  });
  resolve(true);
});
}


function createUser(fullName, password, email){
  return new promise((resolve, reject) => {
    if(fullName == null ||  fullName == "" || fullName == " " || password == null || password == "" || password == " " )
    resolve("invalid input");

    User.findOne({'full_name': fullName},(err,rec)=>{
      if(err){
        console.log(`error:${err}`);
      }
      else if(rec == null){
        var user = new User ({
          full_name: fullName,
          password: "0",
          email: email,
          long: 0,
          short: 0,
          block_list:{
            upper:0,
            middle:0,
            lower:0
          }

        });
        user.save(
          (err) =>
          {
            if(err)
            console.log(`err: ${err}`);
            else{
              resolve(user);
            }
          });
        }
        else {
          resolve(rec);
        }
      });
    });
}

