import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({nuevaCita}) => {

    const [cita, setcita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:'',
    })
    const [error, seterror] = useState(false)

    const actualizarState = e =>{
        setcita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita

    const submitCita = e =>{
        
        e.preventDefault()

        //validar
        if(mascota.trim() === "" || propietario.trim() === ''|| fecha.trim() === ''|| hora.trim() === ''|| sintomas.trim() === ''){
            
            seterror(true)
            return
        }
        //eliminar mensaje previo
        seterror(false)
    
        //añadir un id
        cita.id = uuidv4()

        //crear una cita
        nuevaCita(cita)

        //reiniciar formulario

        setcita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas:'',
        })

        
        

    }



    return (
        <>
            <h2>Crear Citas</h2>
            {error && <p className='alerta-error'>Debes Cumplimentar todos los campos</p>}
            <form
                onSubmit={submitCita}>
                <label >Nombre Mascota</label>
                <input 
                    type="text"
                    name='mascota'
                    className='u-full-width'
                    placeholder='nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                    />
                <label >Nombre Dueño</label>
                <input 
                    type="text"
                    name='propietario'
                    className='u-full-width'
                    placeholder='nombre dueño'
                    onChange={actualizarState}
                    value={propietario}

                    />
                <label >Fecha</label>
                <input 
                    type="date"
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}

                    />
                <label >Hora</label>
                <input 
                    type="time"
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}

                    />
                <label >Síntomas</label>
                    <textarea 
                        name="sintomas" 
                        className='u-full-width'
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'>
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

export default Formulario

