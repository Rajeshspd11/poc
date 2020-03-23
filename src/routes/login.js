const express = require('express');
const path = require('path');
const router = express.Router();

const auth = require('../middleware/auth');

//controllers
const loginController= require('../controller/loginController');

// router.post('/userLogin',(req, res, next) => {
//     console.log('username '+req.body.username);
//     res.end(''+req.body.username);
// })

router.post('/userLogin', loginController.loginHandler);

router.use('/logout', loginController.logoutHandler);


router.use('/',auth.authenticate, (req, res, next) =>{
    console.log('req rec '+req);
    res.sendFile(path.join(__dirname, '../','views', 'login.html'));
});

module.exports = router;