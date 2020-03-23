const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

router.use('/',auth.authenticate,(req, res, next)=>{
    res.status(200).send('From details route. <br>  Status: LoggedIn  <br> <Br> <a href="/index"> back to index page</a><Br> <a href="/login/logout"> logout</a>');
});

module.exports = router;