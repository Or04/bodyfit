var User =require('../models/trainees'),
 promise = require('promise'),
 axios = require('axios'),
 mongoose = require('mongoose');

module.exports = {
  createUser,
  setUserBlockList
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
          upper_body:0,
          lower_body:0,
          middle_body:0
          

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



  function setUserBlockList(user_id, upper_body, lower_body, middle_body){
    return new promise((resolve, reject) =>{
    if(upper_body == true){
      console.log("upper_body");
      User.update({"_id": user_id}, {"upper_body" : upper_body},
      (err) => {
        if(err)
        console.log(`err: ${err}`);
      });
    }
    if(lactose == true){
      console.log("lower_body");
      User.update({"_id": user_id}, {"lower_body" : lower_body},
      (err) => {
        if(err)
        console.log(`err: ${err}`);
      });
    }
    if(peanuts == true){
      console.log("middle_body");
      User.update({"_id": user_id}, { "middle_body" :  middle_body},
      (err) => {
        if(err)
        console.log(`err: ${err}`);
      });
    }
   
    User.update({"_id": user_id}, {"password" : "1"},
    (err) => {
      if(err)
      console.log(`err: ${err}`);
    });
    resolve(true);
  });
  }
  



