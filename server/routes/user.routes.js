const userController = require('../controllers/user.controller')

module.exports = (app) =>{

    app.post('/api/users', userController.createUser);
    app.get('/api/users' , userController.findAllUsers);
    app.get('/api/users/:id' , userController.findOneUser);
    app.put('/api/users/:id' , userController.editOneUser);
    app.delete('/api/users/:id' , userController.deleteUser);
}