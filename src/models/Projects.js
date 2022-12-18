//Modelar tabla de Projects
import {DataTypes} from 'sequelize';

//Traemos conexion de la BD
import {sequelize}  from '../databases/databases.js'

//Importamos Task para la relacion
import { Task } from './Task.js';

//Definimos una tabla
export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
},{
    //Aca pueden ir opciones de la tabla
    timestamps: false
})

//Hacemos la relacion ya que un Project puede terner muchs Tasks

Project.hasMany(Task, {
    //Especificamos como sera la relacion
    foreignKey: 'projectId',
    sorceKey: 'id', //Del Schema de Project
});

//Ahora configuramos la tarea para dar a entender que pertenece 
Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id',
})

