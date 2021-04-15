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
    const users = db.collection('users');
    const usuario = await users.where('user', '==', data.username).get();

    usuario.forEach(doc => {
        db.collection('users').doc(doc.id).update({
            name:data.nombre,
            descripcion:data.descripcion
        })  
    });

    const usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('autor', '==', req.session.user_id).get();
    res.render('perfil',{usuario: req.session.user_id, usur: usu, juegor: juego});
    
}

module.exports = controller;