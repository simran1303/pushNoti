const { Expo } = require('expo-server-sdk');
let expo = new Expo();

exports.token = (somePushTokens = []) => {

    let messages = [];
    for (let pushToken of somePushTokens) {
        if (!Expo.isExpoPushToken(pushToken)) {
            console.error(`Push token ${pushToken} is not a valid Expo push token`);
            continue;
        }

        messages.push({
            to: pushToken,
            sound: "default",
            title: "Hey, how are you",
            body: "You have pending pitstop, don't forget to fill them",
            data: { withSome: "data" },
        });
    }

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
        for (let chunk of chunks) {
            try {
                let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                console.log(ticketChunk);
                tickets.push(...ticketChunk);
            } catch (error) {
                console.error(error);
            }
        }
    })();


}

