const db = require('../database/models');


let lasCategoriasMiddleware = {
  listado: function(req, res, next) {
    let thecategorie = {}
    db.Category.findAll()
    .then(function(laCategoria){    
      thecategorie =  {laCategoria:laCategoria};
      req.session.thecategorie
    })
     next();
}
  }
  module.exports = lasCategoriasMiddleware;

/*
EN EL NAVBAR 2 VA ALGO COMO ESTO
<%for (let i=0; i<req.session.thecategorie.length; i++) { %>
          <a class="theCategoryList" href="/products/category/<%=req.session.thecategorie[i].id%>"><%= req.session.thecategorie[i].name%></a>
          <%// } %>

*/


  /*
  
  create: function(req, res, next) {
    db.Category.findAll()
    .then(function(laCategoria){    
    res.render('productCreateForm', {laCategoria:laCategoria});
    })
  },
  
  
  */