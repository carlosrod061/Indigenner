const controller = {};

const admin = require('firebase-admin');

const db = admin.firestore();

controller.list = (req, res) => {
    res.render('desarrollador');
};




controller.newUser = async (req, res) => {
    const data = req.body;

    let passwordHash = await bcrypt.hash(data.password, 8);

    const newUser = {
        name: data.nombre,
        user: data.user,
        password: passwordHash
    };
    
    await db.collection('users').doc().create(newUser);
    res.render('iniciarsesion');

};

module.exports = controller;