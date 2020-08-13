module.exports = (sequelize, dataTypes) => {
  const alias = 'FiscalC';
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
    tableName: 'fiscals_conditions',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const FiscalC = sequelize.define(alias, cols, config);  
  
  FiscalC.associate = function(models) {
    FiscalC.hasMany(models.Usuario, {
        as: 'User',
        foreignKey: 'fiscal_condition_id'
    })
};

  return FiscalC;
}