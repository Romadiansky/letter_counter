var request = require('request');
var GITHUB_TOKEN = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
    'User-Agent': 'request',
    Authorization: GITHUB_TOKEN
  }
};

  request(options, function(err, res, body) {
    var data = JSON.parse(body);
    cb(err, data);
  });

}


getRepoContributors("jquery", "jquery", function(err, result) {
  result.forEach(function(user) {
    console.log(user.avatar_url);
  })
  console.log("Errors:", err);
  // console.log("Result:", result);
});


