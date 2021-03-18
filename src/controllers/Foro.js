const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = (req, res) => {
    res.render('foro',{usuario: req.session.user_id});
};

controller.foro = async (req, res) => {
    const data = req.body;
    const foros = db.collection('foro');
    const foro = await foros.where('comentario', '==', true).get();
    res.render('foro');
};

module.exports = controller;