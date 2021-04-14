const controller = {};
var nodemailer = require('nodemailer');

const admin = require('firebase-admin');
const db = admin.firestore();
const bcrypt = require('bcryptjs');


controller.sendEmail = async (req, res) => {
    const message = "message";
    res.render('sendEmail', {
        data: message
    });
};

controller.resetPassword = async (req, res) => {
    const data = req.body;

    const users = db.collection('users');
    const usuario = await users.where('user', '==', data.username).get();
   
    if (!usuario.empty) {
        let correo = usuario.docs[0].data().email;
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com.",
            port: 587,
            secure: false,
            auth: {
                user: "indiginner@gmail.com",
                pass: "1nd1g1nn3r",
            }
        });

        var mailOptions = {
            from: "Remitente",
            to: correo,
            subject: "Solicitud de reestablecimiento de contraseña",
            html: "Se recibio una solicitud de reestablecimiento de contraseña, por lo que deseamos averiguar si realmente usted " + data.username + " a realizado la peticion,<br> si es asi de click en el siguiente boton para restablecer su contraseña: <br> <br> <button type='button' style='background-color:#00D714;'> <a href='https://indigenner.herokuapp.com/settingPassword/" + data.username + "' style='text-decoration: none; color: white'>Reestablecer contraseña</a> </button><br> <br> INDIGINNER ©."

        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                const message = "Ha ocurrido un error, contactese con administrador";
                res.render('sendemail', {
                    data: message
                });
            } else {
                const message = "El correo ha sido enviado, verifique su bandeja de entrada";
                res.render('iniciarsesion', {
                    data: message
                });
            }
        });

    } else {
        const message = "Error el usuario no existe en la base de datos.";
        res.render('sendEmail', {
            data: message
        });

    }
};


controller.settingPassword = async (req, res) => {
    const user = req.params.user;
    res.render('settingPassword', {
        data: user
    });
};

controller.settingPasswordPost = async (req, res) => {
    const data = req.body;

    const users = db.collection('users');
    const usuario = await users.where('user', '==', data.username).get();

    console.log()

    if (!usuario.empty) {

        let passwordHash = await bcrypt.hash(data.newPassword, 8);

        usuario.forEach(doc => {
            db.collection('users').doc(doc.id).update({
                password:passwordHash
            })  
        });


        const message = "Se cambio exitosamente la contraseña, intente iniciar sesion.";
        res.render('iniciarsesion', {
            data: message
        });
    }

};

module.exports = controller;