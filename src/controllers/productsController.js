const fs = require('fs');
const path = require('path');

let jsonDeProductos = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf8');
let productosParseados = JSON.parse(jsonDeProductos);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productsController = {
  // TODOS LOS PRODUCTOS
  index: function(req, res, next) {
    res.render('products', {
      productosParseados,
      thousandGenerator: toThousand
    });
  },

  // DETALLE DE CADA PRODUCTO
  detailProduct: function(req, res, next) {
    let pdtoID = req.params.id;
    let productFind = productosParseados.find(pdto => pdto.idProducto == pdtoID);
    
    res.render('productDetail', {
      productFind,
      thousandGenerator: toThousand
    });
  }


// ,
// // CREAR - muestra formulario vacio para crear
// create: function(req, res, next) {
//   res.render('productCreateForm');
//   //res.render('product-create-form')
// },
// // CREAR - muestra formulario guardar producto
// store: function(req, res, next) {
//   let nuevoProducto = {
//     idProducto: Number(productosParseados.length + 1),
//     ...req.body,
//     imgProducto: req.files[0].filename
//   };
//   productosParseados.push(nuevoProducto);
//   let productosActualizados = JSON.stringify(productosParseados);
//   fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosActualizados);
//   res.redirect('/products/productDetail/' + nuevoProdcuto.idProducto)
// },
// // MODIFICAR - muestra formulario para editar producto con el producto
// editProduct: function(req, res, next) {
//   for(let i = 0; i < productosParseados.length; i++) {
//     if (productosParseados[i].idProducto == req.params.id) {
//       res.render ('productEditForm', {
//         producto: productosParseados[i]
//       })
//     }
//   }
// },
// // MODIFICAR - muestra formulario para actualizar producto.
// updateProduct: (req, res) => {
//   let productoActualizado = {
//     id: Number(req.params.productId),
//     ...req.body
//   };
//   for(let i = 0; i < productosParseados.length; i++) {
//     if (productosParseados[i].id == productoActualizado.id) {
//       productosParseados[i] = productoActualizado;
//       fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
//       res.redirect('/products/detail/' + productoActualizado.id)
//     }
//   }
// },
// destroy : (req, res) => {
// 	for(let i = 0; i < productosParseados.length; i++) {
// 		if(productosParseados[i].id == req.params.productId) {
// 			let index = productosParseados.indexOf(productosParseados[i]); productosParseados.splice(index, 1);
// 			fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosParseados));
// 			res.redirect('todosLosProductos')
// 		}
// 	}
// }
}

module.exports = productsController;