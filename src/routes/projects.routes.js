import { Router } from "express";
import { deleteProject, getProject, getProjects, getProjectTasks, saveProject, updateProject } from "../controllers/projects.controller.js";

const router = Router();

//Definimos rutas
router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', saveProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);


//Ruta para obtener las tareas de cada proyecto
             //proyecto => dame el que tenga id '' => de ese dame todas sus tareas   
router.get('/projects/:id/tasks', getProjectTasks);
export default router;