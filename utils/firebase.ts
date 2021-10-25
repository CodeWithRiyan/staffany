const admin = require('firebase-admin')
const serviceAccount = require('./staffany.json')

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    })
}

export default admin
