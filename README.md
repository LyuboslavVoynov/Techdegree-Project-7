# Node Twitter Client

This is a Twitter clone/client, built to practice using Node, Express, promises, asynchronous programming and Javascript in general.

The project was begun with an html mockup from a designer. All code is proprietary.

## Configuring for your own use

If you wish to download a copy of this repo to run on your own computer, you'll need to configure your Twitter credentials.

To to this, first visit [Twitter's apps page](apps.twitter.com) to setup a new app. From there, grab your keys and put them in a new file called config.js in the following format:

    module exports = {
      consumer_key: '......',
      consumer_secret: '.....',
      access_token: '.......',
      access_token_secret: '.....'
    };

    

When you have done this, save the file in the `/js` folder.
