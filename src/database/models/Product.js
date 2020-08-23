module.exports = (sequelize, dataTypes) => {
  const alias = 'Prod';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false
    },
    detail: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    top_check: {
      type: dataTypes.BOOLEAN(1)
    },
    offer_check: {
      type: dataTypes.BOOLEAN(1)
    },
    offer_discount: {
      type: dataTypes.INTEGER(10)
    },
    stock: {
      type: dataTypes.INTEGER(10)
    },
    price:{
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    image:{
      type: dataTypes.STRING(100)
    },
    category_id:{
      type: dataTypes.INTEGER(10),
    },
    active:{
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    }
    
  };
  let config = {
    tableName: 'products',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const Prod = sequelize.define(alias, cols, config);
  
  Prod.associate = function(models) {
    Prod.belongsTo(models.Category, {
      as: 'Category',
      foreignKey: 'category_id'
    });
    Prod.belongsToMany(models.Usuario, {
      as: 'User',
      through: 'purchases',
      foreignKey: 'product_id',
      otherKey: 'user_id',
      timestamps: true
    });
  };
  
  return Prod;
}