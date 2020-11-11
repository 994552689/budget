const express = require('express');
const router = express.Router();

const db = require('../queries');


router.get('/api/budgeting', db.getAllEnvelopes);
router.get('/api/budgeting/:id', db.getSingleEnvelopes);
router.post('/api/budgeting', db.createEnvelopes);
router.put('/api/budgeting/:id', db.updateEnvelopes);
router.delete('/api/budgeting/:id', db.removeEnvelopes);


module.exports = router;