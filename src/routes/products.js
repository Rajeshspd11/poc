const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');


router.use('/', auth.authenticate, (req, res, next) => {
  res.status(200).send('From Products route. <br> Status: LoggedIn <br> <Br> <a href="/index"> back to index page</a><Br> <a href="/login/logout"> logout</a>');
});

module.exports = router;