const controller = {};


controller.list = (req, res) => {
    res.render('inicio',{usuario: req.session.user_id});
};








module.exports = controller;