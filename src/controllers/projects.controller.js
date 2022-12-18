//Controlador de Projects

//Traemos modelos para hacer los querys
import {Project} from '../models/Projects.js'
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.send(projects)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getProject = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Project.findOne({ 
            where: { id } 
        });

        if (!project) {
            return res.status(404).json({message: `No se encontro el proyecto con ID: ${id}`})
        }

        res.send(project)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const saveProject = async (req, res) => {
    //Guradamos los datos que vienen del body
    const {name, priority, description} = req.body
    try {
        const newProject = await Project.create({
            name,
            description,
            priority
        });
        res.json(newProject);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const updateProject = async (req, res) => {
    const id = req.params.id;
    const {name, priority, description} = req.body;
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({message: `No se encontro el proyecto con ID: ${id}`})
        }
        //En caso de que si cncontremos proyecto con esa id, lo modificamos
        project.name = name;
        project.priority = priority;
        project.description = description;

        //Lo actualizamos
        await project.save();

        res.send(project);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};

export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        
        await Project.destroy({
            where: {id}
        });
    
        //Enviamos respuesta sin mostrar nada
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


//Obtener tareas de un proyecto
export const getProjectTasks = async (req, res) => {
    const {id} = req.params

    //Bucsamos las tareas que tengan como projectId = id
    const tasks = await Task.findAll({
        where:{projectId : id}
    }); 

    res.json(tasks);
}