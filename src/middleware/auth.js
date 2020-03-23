const jwt = require('jsonwebtoken');
var url = require('url');

const authenticate = (req, res, next) => {
    if (req.session.token && req.session.isLoggedIn) {
        try {
            
            jwt.verify(req.session.token, 'thesecretkey');
            if(req.originalUrl == '/login'){
                res.redirect('/details')
            }
            else{
                next();
            }
        } catch (err) {
            res.status(401).redirect('/login');
        }

    }
    else {
        if(req.originalUrl == '/login'){
            next();
        }
        else{
        res.status(401).redirect('/login');}
    }
}


module.exports = { authenticate };


// app.use(function(req, res, next){
//     const bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader !== 'undefined') {
//       const bearer = bearerHeader.split(" ");
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       next();
//     } else {
//       res.sendStatus(403);
//     }
//   });
