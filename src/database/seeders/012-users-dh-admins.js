'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
            {
        id:5,
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
        fiscal_condition_id: 1,
        image: "no-image.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:6,
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
        fiscal_condition_id: 1,
        image: "no-image.jpg",
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