/* Trans-link Alexa Skill */

const Alexa = require('ask-sdk');
const axios = require('axios');
const env = require('./env.json');
const IntentHandlers = require('./intent-handlers');

if (env.DEBUG === true) {
    axios.interceptors.request.use(config => {
        console.log(`REQUEST SENT -- METHOD: ${config.method}`, config);

        return config;
    }, error => {
        console.log(errror)
        // Do something with request error
        return Promise.reject(error);
    });
}

const {
    CancelAndStop,
    Directions,
    Help,
    Launch,
    SessionEnded
} = IntentHandlers

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        CancelAndStop,
        Directions,
        Help,
        Launch,
        SessionEnded
    ).lambda();
