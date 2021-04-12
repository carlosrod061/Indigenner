const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

controller.list = async (req, res) => {
    const usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('autor', '==', req.session.user_id).get();
    res.render('perfil',{usuario: req.session.user_id, usur: usu, juegor: juego});
};

controller.actualizar = async(req,res) => {
    const data = req.body;
    const usuarios = db.collection('users').doc(req.session.user_id);
    const actua = {
        name: usuarios.user,
        password: usuarios.password,
        user: usuarios.user,
        descripcion: data.descripcion
    };

    await db.collection('users').doc(req.session.user_id).set(actua);

    usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    res.render('perfil',{usuario: req.session.user_id,usur: usu});
}

module.exports = controller;