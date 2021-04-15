const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = async (req, res) => {
    const usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('autor', '==', req.session.user_id).get();
    res.render('newproyecto',{usuario: req.session.user_id, usur: usu, juegor: juego});
};

controller.abrirProyecto = async (req, res) => {

    const data = req.body;

    const usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('nombre', '==', data.nombreJuego).get();

    res.render('modificarproyecto', {
        usuario: req.session.user_id, usur: usu, juegor: juego
    });

}

module.exports = controller;