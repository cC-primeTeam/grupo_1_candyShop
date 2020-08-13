'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: "Chocolate Biznike",
        detail: "Bloque Biznikke x 120g.",
        top_check: "0",
        offer_discount: "0",
        price: "14.00",
        image: "ChocolateBiznike-1594408922740.jpg",
        category_id: "3",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
