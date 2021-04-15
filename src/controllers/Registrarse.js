const controller = {};

const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');


const db = admin.firestore();

controller.list = (req, res) => {
    const message = "message";
    res.render('registrarse',{data:message});
};




controller.newUser = async (req, res) => {
    const data = req.body;
    const users = db.collection('users');
    const username = await users.where('user', '==', data.user).get();   

    if (username.empty) {
       
        let passwordHash = await bcrypt.hash(data.password, 8);

        const newUser = {
            name: data.nombre,
            user: data.user,
            password: passwordHash,
            email: data.email,
            descripcion: 'Sin descripcion'
        };

        await db.collection('users').doc().create(newUser);
       
        const message = "Success";
        
        res.render('iniciarsesion',{data:message});
    } else {
        const message = "Failed";
        res.render('registrarse',{data:message});
    }




};





module.exports = controller;