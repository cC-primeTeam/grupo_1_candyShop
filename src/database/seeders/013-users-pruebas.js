'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:7,
        email: "pepe@pepino.com",
        password: "$2b$10$vY/xMFAyA9A.yqQPKIDduu6JeBhRVPSYldMJDd7cqJjr3EQqKjTd2", //milanesa
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
        password: "$2b$10$bC1cXUqjlfydaul6bYN7leeISYS4cnsPP.IrfSuphGBKaOcNfwHlm",
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
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
