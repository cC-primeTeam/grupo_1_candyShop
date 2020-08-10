const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');


// const fs = require('fs');
// const path = require('path');
// let jsonDeProductos = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf8');
// let productosParseados = JSON.parse(jsonDeProductos);

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let productsController = {
  // TODOS LOS PRODUCTOS
  index: function(req, res, next) {
    db.Producto.findAll()
    .then(function(losProductos) {
      res.render('products', {losProductos, milesGenerator: milSeparator})
    })
  },
// CREAR - muestra formulario vacio para crear
create: function(req, res, next) {
  res.render('productCreateForm');
},
// CREAR - Almacena producto
store: function(req, res, next) {
  db.Producto.create({
    name: req.body.name,
    category: req.body.category,
    detail: req.body.detail,
    price: req.body.price,
    top_check: req.body.top_check,
    offer_check: req.body.offer_check,
    offer_discount: req.body.offer_discount,
    image: req.files[0].filename,
    active: 1
  })
    res.redirect('/products')
    // res.redirect('/products/' + nuevoProducto.idProducto) mandar al producto creado
},
// DETALLE DE CADA PRODUCTO
detailProduct: function(req, res, next) {
  db.Producto.findByPk(req.params.id)
  .then(function(elProducto) {
    let activeStat = elProducto.active == true ? 'SI, EL PRODUCTO ESTA ACTIVO' : 'NO, EL PRODUCTO ESTA SUSPENDIDO';
    res.render('productDetail', {elProducto:elProducto, activeStat, milesGenerator: milSeparator});
      })
    },



  // let pdtoID = req.params.id;
  // let productFind = productosParseados.find(pdto => pdto.idProducto == pdtoID); 
  
  // res.render('productDetail', {
  //   productFind,
  //   milesGenerator: milSeparator
  // });
  
// },


// listUsrManagementForAdmin: function(req, res, next) {
//   db.Usuario.findByPk(req.params.id)
//   .then(function(elUsuario) {
//     let adminStat = elUsuario.admin == true ? 'SI, ES ADMINISTRADOR' : 'NO, ES USUARIO';
//     let activeStat = elUsuario.active == true ? 'SI, EL USUARIO ESTA ACTIVO' : 'NO, EL USUARIO ESTA SUSPENDIDO';
//     res.render('userManagementForAdmin', {elUsuario:elUsuario, adminStat, activeStat});
//   })
// },





}
module.exports = productsController;














/*
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
  let productoRecuperado;
  
  for(let i = 0; i < productosParseados.length; i++) {
    if(productosParseados[i].idProducto == req.params.id) {
      productoRecuperado = productosParseados[i];
    }
  }    
  
  let productoActualizado = {
    idProducto: Number(req.params.id),
    ...req.body,
    imgProducto: productoRecuperado.imgProducto
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
*/