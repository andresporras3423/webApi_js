const {users} = require("../models/users.js");


module.exports.usersController = (app, request, usersModel) => {
  let message= 'hello world';
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
          response.json({'message': "saved"});
          } catch (err) {
            console.log(err);
          }
      
    });

    app.get('/users/find', async (req, response)=>{
      try{
          let email = req.body.email;
          let pass = req.body.pass;
        list_users = await users.find({"email": email, "pass": pass});
        response.json({'message': list_users});
      }
      catch(err){
        console.log(err);
      }
    });
};