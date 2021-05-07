const express = require('express');
const router = express.Router();

const LanguagesController = require('../controllers/languagesController');

router.get("/getTrendingLanguagesInRepos", LanguagesController.getTrendingLanguagesInRepos);

module.exports = router;