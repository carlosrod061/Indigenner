const controller = {};


controller.list = (req, res) => {
    res.render('novedades',{usuario: req.session.user_id});
};


module.exports = controller;