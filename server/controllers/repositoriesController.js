const octokit = require('@octokit/request')

exports.getTrendingRepos = async (req, res) => {
    try {
        const today = new Date();
        const priorDate = new Date().setDate(today.getDate() - 30); //date in milliseconds
        //to convert date from milli seconds to YYYY-MM-DD format and remove time zone
        const date = new Date(priorDate).toISOString().split('T')[0]; 
        console.log(date);
        const repos = await octokit.request('GET /search/repositories', {
          q: `created:>${date} `, //check syntax
          sort: 'stars',
          order: 'desc',
          per_page: '100',
        })
        return res.send({data: repos.data.items})
    
      } catch (err) {
        return res.send(err.message)
      }
}
