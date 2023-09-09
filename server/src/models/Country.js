const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNul: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNul: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNul: false,
    }
  });
};