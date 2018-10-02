var request = require('request');
var GITHUB_TOKEN = require('./secrets.js');
var fs = require('fs');

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
    downloadImageByURL(user.avatar_url, './avatars/' + user.login + '.jpg');
  })
  console.log("Errors:", err);
  // console.log("Result:", result);
});

function downloadImageByURL(url, filepath) {
  request.get(url)
   .on('error', function (err) {
     throw err;
   })
   .on('response', function (response) {
     console.log('Response Status Code: ', response.statusCode + response.headers['content-type']);
   })
   .pipe(fs.createWriteStream(filepath));

}

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/.jpg")





