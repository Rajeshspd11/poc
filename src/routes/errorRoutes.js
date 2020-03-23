const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
    res.status(404).send('<h1> Page Not found </h1> <br>  <br> <Br> <a href="/index"> back to index page</a>');
})

module.exports = router;