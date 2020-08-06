module.exports = (sequelize, dataTypes) => {
  let alias = 'ImgProd';
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    products_id:{
      type: dataTypes.INTEGER(10)
    }
  };
  let config = {
    tableName: 'images_products',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const ImgProd = sequelize.define(alias, cols, config);
  
  ImgProd.associate = function(models) {
    ImgProd.belongsTo(models.Prod, {
        as: 'Prod',
        foreignKey: 'products_id'
    })
};

  return ImgProd;
}