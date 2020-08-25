'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('purchases', [
      {
        user_id: "2",
        product_id: "4",
        quantity: "5",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "2",
        product_id: "8",
        quantity: "9",
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: "2",
        product_id: "3",
        quantity: "2",
        created_at: new Date(),
        updated_at: new Date()
      }      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('purchases', null, {})
  }
};