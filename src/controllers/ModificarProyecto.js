const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();

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

controller.actualizarproyecto = async(req,res) => {
    const data1 = req.body;
    const proyectos = db.collection('juego');
    const proyecto = await proyectos.where('nombre', '==', data1.nombreJuego).get();
    console.log(proyecto)
    proyecto.forEach(doc => {
        db.collection('juego').doc(doc.id).update({
            descripcion:data1.descripcion,
            categoria:data1.categoria
        })  
    });

    const usuarios = db.collection('users');
    const usu = await usuarios.where('user', '==', req.session.user_id).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('autor', '==', req.session.user_id).get();
    res.render('perfil',{usuario: req.session.user_id, usur: usu, juegor: juego});
}
module.exports = controller;