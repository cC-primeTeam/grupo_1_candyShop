module.exports = (sequelize, dataTypes) => {
  const alias = 'Producto';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10),
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
    category_id:{
      type: dataTypes.INTEGER(10)
    },
    top_check: {
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    },
    oferta_check: {
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    },
    oferta_descuento: {
      type: dataTypes.INTEGER(10)
    },
    oferta_precio: {
      type: dataTypes.INTEGER(10)
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
      Prod.belongsTo(models.CategProd, {
          as: 'CategProd',
          foreignKey: 'categogy_id'
      })
  };
  
  return Prod;
}