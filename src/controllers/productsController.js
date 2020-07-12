const fs = require('fs');
const path = require('path');

let jsonDeProductos = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf8');
let productosParseados = JSON.parse(jsonDeProductos);

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let productsController = {
  // TODOS LOS PRODUCTOS
  index: function(req, res, next) {
    res.render('products', {
      productosParseados, 
      milesGenerator: milSeparator
    });
  },
  
  // DETALLE DE CADA PRODUCTO
  detailProduct: function(req, res, next) {
    // let idProducto = req.params.id;
    // for(let i = 0; i < productosParseados.length; i++) {
    //     if(productosParseados[i].id == idProducto) {
    //         res.render('productDetail', {
    //             producto: productosParseados[i]
    //           })
    //         }
    //       }
    // res.send('ok!!!')
    let pdtoID = req.params.id;
    let productFind = productosParseados.find(pdto => pdto.idProducto == pdtoID);
    
    res.render('productDetail', {
      productFind,
      milesGenerator: milSeparator
    });
    
  },
  // CREAR - muestra formulario vacio para crear
  create: function(req, res, next) {
    res.render('productCreateForm');
  },
  // CREAR - muestra formulario guardar producto
  store: function(req, res, next) {
    req.body.costo = Number(req.body.costo);
    req.body.utilidad = Number(req.body.utilidad);
    req.body.precio = Number(req.body.precio);
    req.body.descuento = Number(req.body.descuento);
    req.body.precioOferta = Number(req.body.precioOferta);
    let nuevoProducto = {
      idProducto: Number(productosParseados.length + 1),
      ...req.body,
      imgProducto: req.files[0].filename
    };
    productosParseados.push(nuevoProducto);
    let productosActualizados = JSON.stringify(productosParseados);
    fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosActualizados);
    res.redirect('/products/' + nuevoProducto.idProducto)
  },
  // MODIFICAR - muestra formulario para editar producto con el producto
  editProduct: function (req, res, next) {
    //res.send(req.body)
    for(let i = 0; i < productosParseados.length; i++) {
      if (productosParseados[i].idProducto == req.params.id) {
        res.render ('productEditForm', {
          producto: productosParseados[i]
        })
      }
    }
  },
  // MODIFICAR - muestra formulario para actualizar producto.
  updateProduct: function (req, res) {
    //res.send(req.body)
    let productoActualizado = {
      idProducto: Number(req.params.id),
      ...req.body
    }
    for(let i = 0; i < productosParseados.length; i++) {
      if (productosParseados[i].idProducto == productoActualizado.idProducto) {
        productosParseados[i] = productoActualizado;
        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
        res.redirect('/products/' + productoActualizado.idProducto)
      }
    }
  },
  allProductsModify: function(req, res, next) {
    res.render('allProductsModify', {
      productosParseados, 
      milesGenerator: milSeparator
    });
  },
  destroy: function (req, res) {
    for(let i = 0; i < productosParseados.length; i++) {
      if(productosParseados[i].idProducto == req.params.id) {
        let index = productosParseados.indexOf(productosParseados[i]); productosParseados.splice(index, 1);
        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
        res.redirect('/products/')
      }
    }
  }
}

module.exports = productsController;