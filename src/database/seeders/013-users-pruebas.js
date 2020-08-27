'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:7,
        email: "pepe@pepino.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'CABA',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Pepe Pepino",
        business_name: "Pepe Pepino S.A.",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "pepe@pepino.com.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:8,
        email: "jtomaschiesa@gmail.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Pepe Pepino",
        business_name: "Pepe Pepino S.A.",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "pepe@pepino.com.jpg",
        admin: "0",
        active: "0",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:9,
        email: "admin@candyshop.net.ar",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Pepe Pepino",
        business_name: "Pepe Pepino S.A.",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:10,
        email: "usuario@candyshop.net.ar",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Pepe Pepino",
        business_name: "Pepe Pepino S.A.",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "0",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:11,
        email: "suspendido@candyshop.net.ar",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Calle 000",
        location: "Ciudadela",
        municipality: 'Tres de Febrero',
        province: "Buenos Aires",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "Pepe Pepino",
        business_name: "Pepe Pepino S.A.",
        cuit: "00000000000",
        fiscal_condition_id: 2,
        image: "logocandy.svg",
        admin: "0",
        active: "0",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
