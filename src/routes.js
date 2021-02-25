const { Router } = require('express');
const UserController = require('./controller/UserController')
const router = Router();

router.get('/users', UserController.find);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router