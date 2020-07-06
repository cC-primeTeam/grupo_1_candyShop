let usersController = {
    index: function(req, res, next) {
    res.render('user');
  },
  register: function(req, res, next) {
    res.render('registro');
  },
  login: function(req, res, next) {
    res.render('login');
  },
  
}
module.exports = usersController;