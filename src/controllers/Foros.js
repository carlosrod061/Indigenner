const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = (req, res) => {
    res.render('foros',{usuario: req.session.user_id});
};

controller.foro = async (req, res) => {
    const data = req.body;
    const foros = db.collection('foro');
    const foro = await foros.where('game', '==', true).get();
    res.render('foro');
};

module.exports = controller;