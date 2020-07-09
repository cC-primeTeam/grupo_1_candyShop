const fs = require('fs');
const path = require('path');

let jsonDeProductos = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf8');
let productosParseados = JSON.parse(jsonDeProductos);

let productsController = {
  index: function(req, res, next) {
    res.render('products');
  },
  // DETALLE PRODUCTO
  detailProduct: function(req, res, next) {
  //   let idProducto = req.params.id;
  //   for(let i = 0; i < productosParseados.length; i++) {
  //     if(productosParseados[i].id == idProducto) {
  //       res.render('productDetail', {
  //         producto: productosParseados[i]
  //       })
  //     }
  //   }
  res.send('ok!!!')
  },
  // CREAR - muestra formulario vacio para crear
  create: function(req, res, next) {
    res.render('productCreateForm');
    //res.render('product-create-form')
  },
  // CREAR - muestra formulario guardar producto
  store: function(req, res, next) {
    let nuevoProducto = {
      idProducto: Number(productosParseados.length + 1),
      ...req.body,
      imgProducto: req.files[0].filename
    };
    productosParseados.push(nuevoProducto);
    let productosActualizados = JSON.stringify(productosParseados);
    fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosActualizados);
    res.redirect('/products/productDetail/' + nuevoProdcuto.idProducto)
  },
  // MODIFICAR - muestra formulario para editar producto con el producto
  editProduct: function(req, res, next) {
    for(let i = 0; i < productosParseados.length; i++) {
      if (productosParseados[i].idProducto == req.params.id) {
        res.render ('productEditForm', {
          producto: productosParseados[i]
        })
      }
    }
  },
  // MODIFICAR - muestra formulario para actualizar producto.
  updateProduct: (req, res) => {
    let productoActualizado = {
      id: Number(req.params.productId),
      ...req.body
    };
    for(let i = 0; i < productosParseados.length; i++) {
      if (productosParseados[i].id == productoActualizado.id) {
        productosParseados[i] = productoActualizado;
        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
        res.redirect('/products/detail/' + productoActualizado.id)
      }
    }
  },
  destroy : (req, res) => {
		for(let i = 0; i < productosParseados.length; i++) {
			if(productosParseados[i].id == req.params.productId) {
				let index = productosParseados.indexOf(productosParseados[i]); productosParseados.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
				res.redirect('todosLosProductos')
			}
		}
	}
}

module.exports = productsController;