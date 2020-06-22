const {admin} = require('./app_firebase_config');


module.exports.pushNotification = (async (req, res, next) => {


    const message_notification = {
        notification: {
            title: req.body["title"],
            body: req.body["description"],
            'click_action': 'FLUTTER_NOTIFICATION_CLICK',

        },
        data: {
            'click_action': 'FLUTTER_NOTIFICATION_CLICK',
            'status': '/test',
            'id': '1',
            title: req.body["title"],
            body: req.body["description"],
            channel_id: req.body["channel_name"],

        }

    };
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };


    admin.messaging().sendToDevice(req.body["push_token"], message_notification, notification_options)
        .then(response => {


            sendJsonResponse(res, {
                "message": "Notification sent successfully"
            }, 200);


        })
        .catch(error => {
            console.log(error);
        });


});


function sendJsonResponse(res, data, status) {
    res.status(status);
    res.send(data);
}
