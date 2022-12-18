//Configuracion de ecpress
import express from 'express';

//Importamos rutas de Projects y Task
import projectsRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/task.routes.js'

const app = express();

//Middleware para que reciba y envie JSON
app.use(express.json());

//rutas
app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;