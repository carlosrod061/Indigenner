const controller = {};

const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');

const db = admin.firestore();


controller.list = (req, res) => {
    const message = "message";
    res.render('iniciarsesion', {
        data: message
    });
};


controller.login = async (req, res) => {
    const data = req.body;

    const users = db.collection('users');
    const usuario = await users.where('user', '==', data.username).get();


    

    if (!usuario.empty) {
        
        let password = bcrypt.compareSync(data.password,usuario.docs[0].data().password);  

        if (password) {
            req.session.user_id = data.username;
            const message = "success";
            res.redirect("/");
        } else {
            const message = "failed";
            res.render('iniciarsesion', {
                data: message
            });
        }

    } else {
        const message = "failed";
        res.render('iniciarsesion', {
            data: message
        });
    }




};


controller.cerrarsesion = async (req, res) => {
    req.session.user_id = null;
    res.redirect("/");
}



module.exports = controller;