module.exports.usersController = (app, request) => {
  let message= 'hello world';
  app.get('/users', (request, response)=>{
    response.json({'message': message});
});
};