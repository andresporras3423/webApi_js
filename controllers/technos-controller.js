const {technos} = require("../models/technos.js");
const {users} = require("../models/users.js");


module.exports.technosController = (app, request, mongoose) => {
  app.get('/technos/all', async (req, response)=>{
    try{
      let list_technos = await technos.find({user_id: mongoose.Types.ObjectId(current_user._id)});
      response.json({'message': list_technos});
    }
    catch(err){
      console.log(err);
    }
  });

  app.post('/technos/add', async (req, response)=>{
    try{
        let user_id = req.body.user_id;
        let techno_name = req.body.techno_name;
        let techno_status = req.body.techno_status;
        let new_techno = {techno_name: techno_name, techno_status: techno_status, user_id: user_id};
        const answ = await technos.create(new_techno);
        response.json({'message': answ.id});
    }
    catch(err){
      console.log(err);
    }
  });
};