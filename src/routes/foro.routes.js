import { Router } from "express";
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask, ctrlView, ctrlViewTask } from "../controllers/task.controllers.js";
import { createTaskSchema } from "../models/schema/task.schema.js";
import { validator } from "../middleares/validator.js";

const foroRouter = Router();

//RUTA PARA LA VISTA
foroRouter.get('/', ctrlView)

// endpoint para traer todas las tareas
foroRouter.get('/foros',ctrlGetTasks)

// endpoint para crear una tarea
foroRouter.get('/foros', ctrlViewTask)

// endpoint para crear una tarea
foroRouter.post('/crear', ctrlCreateTask)

// endpoint para crear una tarea
//taskRouter.post('/api/tasks', createTaskSchema, validator,ctrlCreateTask)


// endpoint para modificar una tarea
foroRouter.put('/api/tasks/:id',ctrlUpdateTask)

// endpoint para eliminar una tarea
foroRouter.delete('/foros/:id',ctrlDeleteTask)

export { foroRouter }