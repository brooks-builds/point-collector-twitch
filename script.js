const twitchApiURI = 'https://api.twitch.tv/helix';
// const pointApiURI = 'https://'

Twitch.ext.onAuthorized(async auth => {
    const { helixToken, channelId, clientId, userId } = auth;


});

async function sendToServer({ helixToken, channelId, clientId, userId }) {
    return fetch()
}