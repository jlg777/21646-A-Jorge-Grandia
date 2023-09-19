import { Router } from "express";
import { ctrlCreateForos, ctrlDeleteForo, ctrlGetForos, ctrlUpdateTask, ctrlView } from "../controllers/foro.controllers.js";
import { createTaskSchema } from "../models/schema/task.schema.js";
import { validator } from "../middleares/validator.js";

const foroRouter = Router();

//RUTA PARA LA VISTA
foroRouter.get('/', ctrlView)

// endpoint para traer todas las tareas
foroRouter.get('/foros',ctrlGetForos)

// endpoint para crear una tarea
foroRouter.post('/foros', ctrlCreateForos)

// endpoint para modificar una tarea
foroRouter.put('/api/tasks/:id',ctrlUpdateTask)

// endpoint para eliminar una tarea
foroRouter.delete('/foros/:id',ctrlDeleteForo)

export { foroRouter }