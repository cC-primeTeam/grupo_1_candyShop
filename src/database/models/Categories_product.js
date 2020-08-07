module.exports = (sequelize, dataTypes) => {
  let alias = 'CategProd';
  let cols = {
      id: {
          type: dataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: dataTypes.STRING(45),
          allowNull: false
      }
  };
  let config = {
      tableName: 'categories_products',
      timestamps: true,
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      underscored: true
  };
  const CategProd = sequelize.define(alias, cols, config);

  return CategProd;
}