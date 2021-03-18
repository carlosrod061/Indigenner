const controller = {};


controller.list = (req, res) => {
    res.render('juegos',{usuario: req.session.user_id});
};







module.exports = controller;