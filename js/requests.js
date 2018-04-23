
const express = require('express');
const app = express();
const Twit = require('twit');
const bodyParser = require('body-parser');

const config = require('./config')

const T = new Twit(config);

let friendsJSON = [];

let tweetsJSON = [];

let messagesJSON = [];

//Get Data
T.get('statuses/user_timeline', { count: 5 } , function(err, data) {
    data.forEach(tweet => {
      const date = new Date(tweet.created_at);
      const created_at = date.toString().slice(0,21);
      const {text} = tweet;
      const {user} = tweet;
      const {name} = user;
      const {screen_name} = user;
      const {profile_image_url} = user;
      tweetsJSON.push({created_at,text,name,screen_name,profile_image_url});
    })
    return tweetsJSON;
  })

T.get('friends/list', { count:5}, function(err, data) {
    const { users } = data;
    users.forEach(friend =>{
      const {name} = friend;
      const {screen_name} = friend;
      const {profile_image_url} = friend;
      const {following} = friend;
      friendsJSON.push({name,screen_name,profile_image_url,following})
    })
  return friendsJSON;
 })


T.get('direct_messages/sent', { count: 5 }, function(err, data, response) {
     data.forEach( message=>{
       const {text} = message;
       const{sender} = message;
       const date = new Date(message.created_at);
       const created_at = date.toString().slice(0,21);
       const{profile_image_url} = sender;
       messagesJSON.push({text,profile_image_url,created_at})
     })
  return messagesJSON;
 });


module.exports.tweetsJSON = tweetsJSON;
module.exports.friendsJSON = friendsJSON;
module.exports.messagesJSON = messagesJSON;
