//Controlador de las tareas

//Traemos modelos para hacer los querys
import {Task} from '../models/Task.js'

export const getTasks = async (req, res) => {
    try {
        const task = await Task.findAll()
        res.send(task)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ 
            where: { id } 
        });

        if (!task) {
            return res.status(404).json({message: `No se encontro una tarea con ID: ${id}`})
        }

        res.send(task)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const saveTask = async (req, res) => {
    //Guradamos los datos que vienen del body
    const {name, done, projectId} = req.body
    try {
        const newTask = await Task.create({
            name,
            done,
            projectId
        });
        res.json(newTask);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};



export const updateTask = async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({message: `No se encontro el proyecto con ID: ${id}`})
        }
        //En caso de que si cncontremos proyecto con esa id, lo modificamos
        task.set(datos)
        //Lo actualizamos
        await task.save();

        //Si hay un campo lo actualizo, si noexiste lo añado 
        res.send(task);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        
        await Task.destroy({
            where: {id}
        });
    
        //Enviamos respuesta sin mostrar nada
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};