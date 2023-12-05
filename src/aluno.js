const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Aluno = sequelize.define("aluno", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Aluno;
