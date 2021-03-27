const pruebaController = {}
const Empleado = require('../models/empleado')

pruebaController.obtener=(req,res)=>{
    res.send('funcionando get')
}

pruebaController.crear=async(req,res)=>{
    const {nombre,apellido,salario} = req.body
    const nuevoRegistro = new Empleado({
        nombre,
        apellido,
        salario
    })
    await nuevoRegistro.save()
    res.json({
        mensaje: "Empleado guardado"
    })

}

pruebaController.actualizar=(req,res)=>{
    res.send('funcionando put')
}

pruebaController.eliminar=(req,res)=>{
    res.send('funcionando delete')
}

module.exports = pruebaController