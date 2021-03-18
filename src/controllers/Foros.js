const controller = {};


controller.list = (req, res) => {
    res.render('foros',{usuario: req.session.user_id});
};







module.exports = controller;