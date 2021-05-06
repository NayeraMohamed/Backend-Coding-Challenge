const express = require('express');
const router = express.Router();

const ReposController = require('../controllers/repositoriesController');

router.get("/getTrendingRepositories", ReposController.getTrendingRepos);

module.exports = router;