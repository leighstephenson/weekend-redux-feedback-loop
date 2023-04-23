const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//!POST request
router.post('/', (req, res) => {
    console.log('Testing in POST on router.js');
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    });
})

//! GET request
router.get('/', (req, res) => {
    console.log('Testing GET in router');
    let queryText = 'SELECT * from "feedback";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET on router.js: ${error}`);
    })
});


module.exports = router;