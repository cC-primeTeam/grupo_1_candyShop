module.exports = function(sequelize, dataTypes) {
  let alias = "Purchase";

  let cols = {
      id: {
          type: dataTypes.INTEGER(10),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      delivery_check:{
        type: dataTypes.BOOLEAN(1)
      },
      user_id: {
          type: dataTypes.INTEGER(10),
          allowNull: false,
      },
      product_id: {
          type: dataTypes.INTEGER(10),
          allowNull: false,
      }
  }

  let config = {
      tableName: "purchases",
      timestamps: true
  }

  let Purchase = sequelize.define(alias, cols, config);

  return Purchase;
}