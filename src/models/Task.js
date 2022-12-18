//Modelar tabla de Task
import {DataTypes} from 'sequelize';

//Traemos conexion de la BD
import {sequelize}  from '../databases/databases.js'

//Definimos una tabla
export const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
},{
    //Aca pueden ir opciones de la tabla
    timestamps: false
})