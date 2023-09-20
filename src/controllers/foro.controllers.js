import { ForoModel } from "../models/Foro.js"

// controlador para mostrar la vista
export const ctrlView = async (req, res) => {
    try {
        const foro = await ForoModel.findAll();
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
       
        const foro = await ForoModel.findAll();
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
        const newForo = await ForoModel.create(req.body)
        await res.status(201).json(newForo)


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
        const foro = await ForoModel.findByPk(id);

        if (!foro) {
            return res.status(404).json({
                message: 'Foro no encontrado'
            })
        }

        await foro.update(req.body)

        return res.status(200).json(foro)
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
        const foroDeleted = await ForoModel.destroy({
            where: {
                id: id
            }
        })
        if (!foroDeleted) {
            return res.status(404).json({
                message: 'Foro no encontrado'
            })
        }
        return res.status(200).json({
            message: 'Foro eliminado'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
