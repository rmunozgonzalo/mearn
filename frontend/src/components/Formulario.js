import axios from 'axios'
import React,{useState}from 'react'

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [salario, setSalario] = useState('')

    const registrar = async(e)=>{
        const nuevoEmpleado={nombre,apellido,salario}
        const respuesta = await axios.post('http://localhost:4000/api',nuevoEmpleado)
    }

    return (
        <div className="container col-md-3 mt-4">
            <form onSubmit={registrar}>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Nombre" onChange={e=>setNombre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Apellido" onChange={e=>setApellido(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Salario" onChange={e=>setSalario(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
