console.log('Bot is starting');

var Twit = require('twit');
var APIKeys = require('./APIKeys');
var T = new Twit(APIKeys);

function getTweet(text, numberOfTweets) {
    var arguments = { q: text, count: numberOfTweets };
    T.get('search/tweets', arguments, gotData);
}

function gotData(err, data, response) {
    console.log(data);
}

function postTweet(text) {
    var tweetText = {
        status: text
    };

    T.post('statuses/update', tweetText, tweetCallback);
}

function tweetCallback(err, data, response) {
    if (!err) {
        console.log("Success");
    }
}

postTweet("Test");