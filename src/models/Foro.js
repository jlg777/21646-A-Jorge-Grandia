import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const ForoModel = sequelize.define('Foro', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: true
})