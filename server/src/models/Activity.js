const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    //defino el modelo
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificult: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["Verano", "Otoño", "Invierno", "Primavera"]],
            },
        }
    })
}