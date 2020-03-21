const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
})

exports.planCreated = functions.firestore
    .document('plans/{planId}')
    .onCreate(doc => {
        const plan = doc.data()
        const notification = {
            content: 'Added a new project',
            user: `${plan.authorFirstName} ${plan.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification)
})

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data()
                const notification = {
                    content: 'Joined the party',
                    user: `${newUser.firstName} ${newUser.lastNarme}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
})