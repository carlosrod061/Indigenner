const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = async (req, res) => {
    const juegos = db.collection('juego');
    const juego = await juegos.get();
    res.render('novedades',{usuario: req.session.user_id, juegor: juego});
};


module.exports = controller;