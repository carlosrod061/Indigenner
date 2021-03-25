const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = async (req, res) => {
    const comentarios = db.collection('foro');
    const comentario = await comentarios.get();
    res.render('foro',{usuario: req.session.user_id, foroq: comentario});
};

module.exports = controller;