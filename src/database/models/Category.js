module.exports = (sequelize, dataTypes) => {
  const alias = 'Category';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
      unique: true
    }
  };
  let config = {
    tableName: 'categories',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const Category = sequelize.define(alias, cols, config);  
  
  Category.associate = function(models) {
    Category.hasMany(models.Prod, {
        as: 'Prod',
        foreignKey: 'category_id'
    })
};

  return Category;
}