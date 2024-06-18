module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    // associações aqui
  };
  return Cliente;
};
