module.exports = (sequelize, dataTypes) => {
  const alias = 'Usuario';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    adress:{
      type: dataTypes.STRING(255)
    },
    location: {
      type: dataTypes.STRING(255)
    },
    province: {
      type: dataTypes.STRING(255)
    },
    postal_code: {
      type: dataTypes.INTEGER(11)
    },
    telephone: {
      type: dataTypes.STRING(17)
    },
    name_fantasy:{
      type: dataTypes.STRING(255)
    },
    business_name:{
      type: dataTypes.STRING(255)
    },
    cuit:{
      type: dataTypes.INTEGER(11)
    },
    fiscal_condition:{
      type: dataTypes.STRING(45)
    },
    image:{
      type: dataTypes.STRING(100)
    },
    admin:{
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    },
    active:{
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    }
  };
  let config = {
    tableName: 'users',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const User = sequelize.define(alias, cols, config);  
  
  return User;
}