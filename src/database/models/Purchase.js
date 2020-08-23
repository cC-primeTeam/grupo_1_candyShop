module.exports = function(sequelize, dataTypes) {
  const alias = "purchases";

  const cols = {
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
      },
      quantity: {
        type: dataTypes.INTEGER(10),
          allowNull: false,
      }
  }

  let config = {
      tableName: "purchases",
      timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const purchases = sequelize.define(alias, cols, config);

  return purchases;
}