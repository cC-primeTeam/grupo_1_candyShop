'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('categories', [
      {
        id: 1,
        name: "ALFAJORES",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: "CARAMELOS",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: "CHOCOLATES",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: "CHUPETINES",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: "GALLETITAS",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
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