const Express = require('express');
const router = Express.Router();
const UserController = require('../controller/user.controller');

router.get('/:email', (req, res) => {
  UserController.get(req.params.email)
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send('User not founded');
      }
    })
    .catch((error) => res.sendStatus(500));
});

router.post('', (req, res) => {
  const user = req.body;

  UserController.create(user)
    .then((newUser) => {
      res.status(200).send(newUser);
    })
    .catch((error) => {
      res.status(500).send('Error while creating new user');
    });
});

module.exports = router;
