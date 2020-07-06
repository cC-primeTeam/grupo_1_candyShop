let productsController = {
    index: function(req, res, next) {
    res.render('todosLosProductos');
  },
  create: function(req, res, next) {
    res.render('formularioProducto');
  },
  detailProduct: function(req, res, next) {
    res.render('detalleProducto');
  },
  editProduct: function(req, res, next) {
    res.render('editarProducto');
  },
}
module.exports = productsController;