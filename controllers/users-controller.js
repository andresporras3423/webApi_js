const {users} = require("../models/users.js");

module.exports.usersController = (app, request, mongoose) => {
  app.get('/users/all', async (req, response)=>{
    try{
      list_users = await users.find({});
      response.json({'message': list_users});
    }
    catch(err){
      console.log(err);
    }
  });
      app.post('/users/add', async (req, response)=>{
        try {
          let name = req.body.name;
          let email = req.body.email;
          let pass = req.body.pass;
          let new_user = {"name":name,"email":email,"pass":pass};
          const answ = await users.create(new_user);
          response.json({'message': answ._id});
          } catch (err) {
            console.log(err);
          }
      
    });

    app.post('/users/login', async (req, response)=>{
      try{
          let email = req.body.email;
          let pass = req.body.pass;
        list_users = await users.findOne({"email": email, "pass": pass});
        if(list_users===null) response.status(404).send();
        else{
          response.cookie('id', list_users._id);
          response.json({'message': list_users});
        }
      }
      catch(err){
        console.log(err);
      }
    });

    app.delete('/users/logout', async (req, response)=>{
      try{
          response.clearCookie('id');
          response.status(202).send();
      }
      catch(err){
        console.log(err);
      }
    });
};