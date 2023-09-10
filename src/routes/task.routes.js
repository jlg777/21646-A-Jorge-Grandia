import { Router } from "express";
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask } from "../controllers/task.controllers.js";
import { createTaskSchema } from "../models/schema/task.schema.js";
import { validator } from "../middleares/validator.js";

const taskRouter = Router();

// endpoint para traer todas las tareas
taskRouter.get('/api/tasks',ctrlGetTasks)

// endpoint para crear una tarea
taskRouter.post('/api/tasks', createTaskSchema, validator,ctrlCreateTask)

// endpoint para modificar una tarea
taskRouter.put('/api/tasks/:id',ctrlUpdateTask)

// endpoint para eliminar una tarea
taskRouter.delete('/api/tasks/:id',ctrlDeleteTask)

export { taskRouter }