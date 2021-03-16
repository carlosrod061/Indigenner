const controller = {};

const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const fuctions = require('firebase-functions');
var serviceAccount = require("../../indiginner-firebase-adminsdk-x3u93-5eb5b6298f.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://indiginner-default-rtdb.firebaseio.com/'
});


const db = admin.firestore();

controller.list = (req, res) => {
    res.render('registrarse');
};




controller.newUser = async (req, res) => {
    const data = req.body;

    let passwordHash = await bcrypt.hash(data.password, 8);

    const newUser = {
        name: data.nombre,
        user: data.user,
        password: passwordHash
    };
    
    await db.collection('users').doc().create(newUser);
    res.render('iniciarsesion');

};





module.exports = controller;