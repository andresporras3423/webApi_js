const {words} = require("../models/words.js");

module.exports.wordsController = (app, request, mongoose) => {
  app.get('/words/all', async (req, response)=>{
    try{
        let user_id = req.body._id;
      list_technos = await technos.find();
      response.json({'message': list_technos});
    }
    catch(err){
      console.log(err);
    }
  });

  app.post('/words/add', async (req, response)=>{
    try{
        let user_id = req.body.user_id;
        let techno_id = req.body.techno_id;
        let word = req.body.word;
        let translation = req.body.translation;
        let new_word = {word: word, translation: translation, user_id: user_id, techno_id: techno_id};
        const answ = await words.create(new_word);
        response.json({'message': answ.id});
    }
    catch(err){
      console.log(err);
    }
  });
};