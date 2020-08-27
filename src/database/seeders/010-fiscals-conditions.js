'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('fiscals_conditions', [
      {
        id: 1,
        name: "CONSUMIDOR FINAL",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: "IVA Responsable Inscripto",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: "IVA no Responsable",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: "IVA exento",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: "Responsable Monotributo",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        name: "Monotributista Social",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('fiscals_conditions', null, {})
  }
};