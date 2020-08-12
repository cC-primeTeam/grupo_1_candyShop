'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        email: "juanespinel@gmail.com",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: "tomas@consek.com.ar",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: "mica.lew@hotmail.com",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: "francisco@hotmail.com",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: "hbaravalle@digitalhouse.com",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: "uriel@digitalhouse.com",
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        province: "Buenos Aires",
        postal_code: "C1428BKD",
        telephone: "011-5263-7400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00-00000000-0",
        fiscal_condition: "CONSUMIDOR FINAL",
        image: "no-imagen.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
