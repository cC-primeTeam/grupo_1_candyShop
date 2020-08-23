const db = require('../database/models');
// const {check, validationResult, body} = require('express-validator');

// const fs = require('fs');
// const path = require('path');
// let jsonDeProductos = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf8');
// let productosParseados = JSON.parse(jsonDeProductos);

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let productsController = {
  // TODOS LOS PRODUCTOS
  all: function(req, res, next) {
    db.Prod.findAll({
      where:{
        active: {[db.Sequelize.Op.eq] : 1}
      }
    })
    .then(function(losProductos) {
      res.render('products', {losProductos:losProductos, milesGenerator: milSeparator})
    })
  },
  // PRODUCTOS EN OFERTA
  offers: function(req, res, next) {
    db.Prod.findAll({
      where:{
        offer_check: {[db.Sequelize.Op.eq] : 1}
      }
    })
    .then(function(losProductos) {
      res.render('offers', {losProductos:losProductos, milesGenerator: milSeparator})
    })
  },
  // PRODUCTOS DESTACADOS
  cheeky: function(req, res, next) {
    db.Prod.findAll({
      where:{
        top_check: {[db.Sequelize.Op.eq] : 1}
      }
    })
    .then(function(losProductos) {
      res.render('offers', {losProductos:losProductos, milesGenerator: milSeparator})
    })
  },
  // CREAR - muestra formulario vacio para crear
  create: function(req, res, next) {
    res.render('productCreateForm');
  },
  // CREAR - Almacena producto
  store: function(req, res, next) {
    db.Prod.create({
      name: req.body.name,
      detail: req.body.detail,
      top_check: req.body.top_check,
      offer_check: req.body.offer_check,
      offer_discount: req.body.offer_discount,
      stock: req.body.stock,
      price: req.body.price,
      image: (req.files[0] == undefined) ? 'no-image.jpg' : req.files[0].filename,
      category_id: req.body.category,
      active: 1
    })
    res.redirect('/products')
    // res.redirect('/products/' + nuevoProducto.idProducto) mandar al producto creado
  },
  // DETALLE DE CADA PRODUCTO
  detailProduct: function(req, res, next) {
    db.Prod.findByPk(req.params.id)
    .then(function(elProducto) {
      let disponible;
      if (elProducto.stock >= 1 && elProducto.active){
        disponible = true
      }
      let activeStat = disponible == true ? 'Añadir al carrito' : 'Venta pausada';
      let activeStatDisable = disponible == true ? '' : 'disabled';
      let activeStatClass = disponible == true ? 'btn-success' : 'btn-secondary';
      res.render('productDetail', {elProducto:elProducto, activeStat, activeStatDisable, activeStatClass, milesGenerator: milSeparator});
    })
  },
  allProductsModify: function(req, res, next) {
    db.Prod.findAll()
    .then(function(losProductos) {
      res.render('allProductsModify', {losProductos:losProductos, milesGenerator: milSeparator})
    })
  },
  // MODIFICAR - muestra formulario para editar producto con el producto
  editProduct: function (req, res, next) {
    db.Prod.findByPk(req.params.id)
    .then(function(elProducto) {
      //  return res.send((elProducto.category_id).toString())
      db.Category.findAll()
      .then(function(resultadoCategorias){
        let categoryCheck = elProducto.category_id == resultadoCategorias.id ? 'selected' : '';
        let activeStat = elProducto.active == true ? 'La venta del producto se encuentra ACTIVA' : 'La venta del producto se encuentra  PAUSADA';
        // res.send(elProducto.image)
        res.render ('productEditForm', {elProducto:elProducto, activeStat, resultadoCategorias:resultadoCategorias, categoryCheck})//
      })      
    })
  },
  // MODIFICAR - put.
  updateProduct: function (req, res, next) {
    // return res.send(typeof req.files)
    db.Prod.update({
      name: req.body.name,
      detail: req.body.detail,
      top_check: req.body.top_check,
      offer_check: req.body.offer_check,
      offer_discount: req.body.offer_discount,
      stock: req.body.stock,
      price: req.body.price,
      image: (!req.files[0]) ? this.image : req.files[0].filename,
      category_id: req.body.category,
      active: req.body.active
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/products/' + req.params.id);
    }); 
  },
  destroy: function (req, res, next) {
    db.Prod.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/products');
    });
  },
  categoryFilterView: function(req, res, next) {
    db.Prod.findAll({
      include:[{association: 'Category'}],
      where:{
        category_id: {[db.Sequelize.Op.eq] : req.params.id}
      }
    })
    .then(function(losProductos) {
      db.Category.findByPk(req.params.id)
      .then(function(laCategoria){
        let paramId = req.params.id
        // return res.send(typeof Number(paramId))
        res.render('categoryFilterView', {losProductos:losProductos, paramId, laCategoria:laCategoria, milesGenerator: milSeparator})
      })
    })
  },
  categoryFilterViewOffer: function(req, res, next) {
    db.Prod.findAll({
      include:[{association: 'Category'}],
      where:{
        category_id: {[db.Sequelize.Op.eq] : req.params.id},
        offer_check: {[db.Sequelize.Op.eq] : 1}
      }
    })
    .then(function(losProductos) {
      db.Category.findByPk(req.params.id)
      .then(function(laCategoria){
        res.render('categoryFilterView', {losProductos:losProductos, laCategoria:laCategoria, milesGenerator: milSeparator})
      })
    })
  },
  categoryFilterViewCheeky: function(req, res, next) {
    db.Prod.findAll({
      include:[{association: 'Category'}],
      where:{
        category_id: {[db.Sequelize.Op.eq] : req.params.id},
        top_check: {[db.Sequelize.Op.eq] : 1}
      }
    })
    .then(function(losProductos) {
      db.Category.findByPk(req.params.id)
      .then(function(laCategoria){
        res.render('categoryFilterView', {losProductos:losProductos, laCategoria:laCategoria, milesGenerator: milSeparator})
      })
    })
  }
}




module.exports = productsController;
/*
categoryFilterView: function(req, res, next) {
  db.Prod.findAll({
    include:[{association: 'Category'}],
    where:{
      category_id: {[db.Sequelize.Op.eq] : req.params.id}
    }
  })
  .then(function(losProductos) {
    db.Category.findByPk(req.params.id)
    .then(function(laCategoria){
      res.render('categoryFilterView', {losProductos:losProductos, laCategoria:laCategoria, milesGenerator: milSeparator})
    })
  })
}
}
*/








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