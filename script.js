const twitchApiURI = 'https://api.twitch.tv/helix';
const pointApiURI = 'https://brooks-builds-point-collector-api-7v4xxqw9c6gj-8000.githubpreview.dev'

Twitch.ext.onAuthorized(async auth => {
    const { helixToken, channelId, clientId, userId } = auth;
    try {
        const response = await sendToServer({ helixToken, channelId, clientId, userId });
    } catch (error) {
        console.error('error sending message', error);
    }
});

async function sendToServer({ helixToken: helix_token, channelId: channel_id, clientId: client_id, userId: user_id }) {
    return fetch(pointApiURI, {
        method: 'POST',
        body: JSON.stringify({
            helix_token, channel_id, client_id, user_id,
        }),
    })
}