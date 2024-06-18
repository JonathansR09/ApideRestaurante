module.exports = (sequelize, DataTypes) => {
  const Prato = sequelize.define('Prato', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {});
  Prato.associate = function(models) {
    // Associações aqui, se houver
  };
  return Prato;
};
