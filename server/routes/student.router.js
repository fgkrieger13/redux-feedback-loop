const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('GET studentlist');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET studentlist', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4)`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
.then(() => {
    res.sendStatus(200);
}).catch((error) => {
    console.log('Error POST studentlist', error)
    res.sendStatus(500);
});})

module.exports = router;