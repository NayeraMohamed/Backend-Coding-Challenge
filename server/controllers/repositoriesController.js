const octokit = require('@octokit/request')

exports.getTrendingRepos = async () => {
    try {
        const date = await getPriorDate();
        const repos = await octokit.request('GET /search/repositories', {
          q: `created:>${date} `,
          sort: 'stars',
          order: 'desc',
          per_page: '100',
        })
        return repos.data.items;
    
      } catch (err) {
        return err.message;
      }
}

getPriorDate = async () => {
  try {
      const today = new Date();
      const MONTH = 30;
      const priorDate = new Date().setDate(today.getDate() - MONTH); //date in milliseconds
      //to convert date from milli seconds to YYYY-MM-DD format and remove time zone
      const date = new Date(priorDate).toISOString().split('T')[0];
      return date;
  
    } catch (err) {
      return err.message;
    }
}