const express = require('express');
const jwt = require('jsonwebtoken');

const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', Role: 'Admin' }];

const loginHandler = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username },
            'thesecretkey',
            { expiresIn: '1h' });

        req.session.isLoggedIn = true;
        req.session.token = token;
        res.redirect('/details');

    }

    else {
        res.status(401).redirect('/login');
        // res.send('invalid details   ')
    }
}

const logoutHandler = (req, res, next) => {
    req.session.destroy(function (err) {
        res.redirect('/index');
    })
}
module.exports = { loginHandler, logoutHandler };