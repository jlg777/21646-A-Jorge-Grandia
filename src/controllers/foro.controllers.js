import { TaskModel } from "../models/Foro.js"

// controlador para mostrar la vista
export const ctrlView = async (req, res) => {
    try {
        const tasks = await TaskModel.findAll();
        res.render('inde.ejs')


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para traer todas las tareas
export const ctrlGetForos = async (req, res) => {
    try {
       
        const foro = await TaskModel.findAll();
        if (!foro) return res.status(404)
        return res.status(200).render('foro.ejs',{foro});

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}


export const ctrlCreateForos = async (req, res) => {
    try {
        const newTask = await TaskModel.create(req.body)
        await res.status(201).json(newTask)


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para modificar una tarea
export const ctrlUpdateForos = async (req, res) => {
    const { id } = req.params
    try {
        const task = await TaskModel.findByPk(id);

        if (!task) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }

        await task.update(req.body)

        return res.status(200).json(task)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para eliminar una tarea
export const ctrlDeleteForo = async (req, res) => {
    const { id } = req.params
    try {
        const taskDeleted = await TaskModel.destroy({
            where: {
                id: id
            }
        })
        if (!taskDeleted) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
