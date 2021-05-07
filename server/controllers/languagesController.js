const ReposController = require('../controllers/repositoriesController');

exports.getTrendingLanguagesInRepos = async (req, res) => {
  
    try {
      const trendingRepos = await ReposController.getTrendingRepos();

      let languages = {};
      for (let i = 0; i < trendingRepos.length; i++) {
        const repo = trendingRepos[i];
        const language = trendingRepos[i].language;
        languages[language] = languages[language] || [];
        languages[language].push(repo);
      }
      //format languages as wanted in the response,
      // each language associated with the count of repos using it and an object of each repo
      const TrendingLanguages = formatResponse(languages);
      return res.send( {data: TrendingLanguages} );
    } catch (err) {
      return res.send(err.message);
    }
  };

  formatResponse = (languages) => { 
    try {
      let TrendingLanguages = [];
      for (const language in languages) {
        TrendingLanguages.push({
            language: language,
            count: languages[language].length,
            repos: languages[language]
        });
        }
      return TrendingLanguages;
    } catch (err) {
      return err.message;
    }
  };