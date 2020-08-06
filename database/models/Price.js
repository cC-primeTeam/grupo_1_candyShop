module.exports = (sequelize, dataTypes) => {
  let alias = 'Price';
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    cost: {
      type: dataTypes.INTEGER(10)
    },
    utility:{
      type: dataTypes.INTEGER(10)
    },
    price:{
      type: dataTypes.INTEGER(10),
      allowNull: false
    },
    products_id:{
      type: dataTypes.INTEGER(10)
    }
  };
  let config = {
    tableName: 'prices',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const Price = sequelize.define(alias, cols, config);
  
  Price.associate = function(models) {
    Price.belongsTo(models.Prod, {
        as: 'Prod',
        foreignKey: 'products_id'
    })
};

  return Price;
}