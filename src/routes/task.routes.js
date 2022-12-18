import { Router } from "express";
import { deleteTask, getTask, getTasks, saveTask, updateTask } from "../controllers/tasks.controller.js";

const router = Router();

//Definimos rutas
router.get('/tasks',getTasks );
router.get('/tasks/:id', getTask);
router.post('/tasks', saveTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);


export default router;