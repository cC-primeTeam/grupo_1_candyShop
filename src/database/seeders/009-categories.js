'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('categories', [
      {
        name: "ALFAJORES",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "CARAMELOS",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "CHOCOLATES",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "GOMITAS",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
};