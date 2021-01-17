const {users} = require("../models/users.js");

module.exports.usersController = (app, request, usersModel) => {
  let message= 'hello world';
  app.get('/users', (request, response)=>{
    users.find({}, (err, users)=>{
      if(err){
        console.log(err);
      }
      else{
        response.json({'message': users});
      }
    })
});
};