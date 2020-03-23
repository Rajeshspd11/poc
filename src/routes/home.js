const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
    res.status(200).send('From home route. <br>  <br> <Br> <a href="/index"> back to index page</a>');
})

module.exports = router;