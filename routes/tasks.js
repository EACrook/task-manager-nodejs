const express = require('express');
const router = express.Router();


router.route('/').get((re1, res) =>{
    res.send('all items')
})

module.exports = router;