const controller = {};

const admin = require('firebase-admin');
const db = admin.firestore();
//Para obtener fecha



controller.list = async (req, res) => {

    const juegos = db.collection('juego');
    const juego = await juegos.get();
    res.render('foros',{usuario: req.session.user_id, foroq: juego});

};

controller.abrirForo = async (req, res) => {

    const data = req.body;

    const infoForos = db.collection('foro');
    const foro = await infoForos.where('game', '==', data.nombreJuego).get();
    const juegos = db.collection('juego');
    const juego = await juegos.where('nombre', '==', data.nombreJuego).get();
    res.render('foro', {
        usuario: req.session.user_id,
        foroq: foro,
        juegor: juego
    });

}

controller.comentar = async (req, res) => {
    var fecha = new Date();
    var hora_actual = fecha.getHours() + ":" + fecha.getMinutes();
    const data = req.body;

    if (req.session.user_id == null) {
        const message = "message";
        res.render('iniciarsesion', {
            data: message
        });
    } else {

        const newComentario = {
            game: data.nombreJuego,
            comentario: data.comentario,
            user: req.session.user_id,
            hora: hora_actual
        };

        await db.collection('foro').doc().create(newComentario);
      
        const infoForos = db.collection('foro');
        const foro = await infoForos.where('game', '==', data.nombreJuego).get();
        const juegos = db.collection('juego');
        const juego = await juegos.where('nombre', '==', data.nombreJuego).get();
        res.render('foro', {
            usuario: req.session.user_id,
            foroq: foro,
            juegor: juego
        });
    }

}

module.exports = controller;