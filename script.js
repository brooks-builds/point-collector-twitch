const twitchApiURI = 'https://api.twitch.tv/helix';

Twitch.ext.onAuthorized(async auth => {
    const { helixToken, channelId, clientId } = auth;
    const rawChannelInfo = await fetch(`${twitchApiURI}/channels?broadcaster_id=${channelId}`, {
        headers: {
            Authorization: `Extension ${helixToken}`,
            'client-id': clientId,
        }
    });
    const channelInfo = await rawChannelInfo.json();
    console.log(channelInfo);
    // const live = await fetch(`${twitchApiURI}/extensions/${clientId}/live_activated_channels`, {
    //     headers: {
    //         Authorization: `Extension ${helixToken}`,
    //         'client-id': clientId,
    //     }
    // }).then(data => data.json());
    // console.log(live);
});

const saveForm = document.querySelector('#save');
saveForm.addEventListener('submit', event => {
    event.preventDefault();
    const value = document.querySelector('#test').value;
    localStorage.setItem('value', value);
})

document.querySelector('#restore').addEventListener('click', event => {
    event.preventDefault();
    const value = localStorage.getItem('value');
    document.querySelector('#fromSaved').textContent = value
})