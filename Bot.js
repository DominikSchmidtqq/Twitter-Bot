console.log('Bot is starting');

var Twit = require('twit');

var APIKeys = require('./APIKeys');

var T = new Twit(APIKeys);

var arguments = { q: 'twitter', count: 1 };

T.get('search/tweets', arguments, gotData);

function gotData(err, data, response) {
    console.log(data);
};