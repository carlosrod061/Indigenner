const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = (req, res) => {
    res.render('foro',{usuario: req.session.user_id});
};

module.exports = controller;