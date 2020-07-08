let usersController = {
    index: function(req, res, next) {
    res.render('user');
  },
  register: function(req, res, next) {
    res.render('register');
  },
  registerEdit: function(req, res, next) {
    res.render('registerEdit');
  },
  login: function(req, res, next) {
    res.render('login');
  },
  
}
module.exports = usersController;