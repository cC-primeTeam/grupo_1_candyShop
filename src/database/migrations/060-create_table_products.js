'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      detail: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      top_check: {
        type: Sequelize.DataTypes.BOOLEAN(1)
      },
      offer_check: {
        type: Sequelize.DataTypes.BOOLEAN(1)
      },
      offer_discount: {
        type: Sequelize.DataTypes.INTEGER(10)
      },
      stock: {
        type: Sequelize.DataTypes.INTEGER(10)
      },
      price:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      image:{
        type: Sequelize.DataTypes.STRING(100)
      },
      category_id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      active:{
        type: Sequelize.DataTypes.BOOLEAN(1),
        allowNull: false
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
