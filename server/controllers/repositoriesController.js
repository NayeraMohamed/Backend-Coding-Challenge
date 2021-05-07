const octokit = require('@octokit/request')

getTrendingRepos = async () => {
    try {
        const today = new Date();
        const priorDate = new Date().setDate(today.getDate() - 30); //date in milliseconds
        //to convert date from milli seconds to YYYY-MM-DD format and remove time zone
        const date = new Date(priorDate).toISOString().split('T')[0]; 
        const repos = await octokit.request('GET /search/repositories', {
          q: `created:>${date} `,
          sort: 'stars',
          order: 'desc',
          per_page: '100',
        })
        return repos.data.items;
    
      } catch (err) {
        return err;
      }
}

exports.getTrendingLanguagesInRepos = async (req, res) => {
  
  try {
    const trendingRepos = await getTrendingRepos();
    let languages = {};
    for (let i = 0; i < trendingRepos.length; i++) {
      const repo = trendingRepos[i];
      const language = trendingRepos[i].language;
      languages[language] = languages[language] || [];
      languages[language].push(repo);
    }
    let TrendingLanguages = [];
    for (const language in languages) {
      TrendingLanguages.push({language: language, count: languages[language].length, repos: languages[language]})
      console.log(languages[language].length)  
      }
    return res.send( {data: TrendingLanguages} );
  } catch (err) {
    return res.send(err.message);
  }
};
