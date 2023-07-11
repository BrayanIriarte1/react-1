import React, { useEffect, useState} from "react";


const Usuario =() =>{
    const [nameUser,setNameUser] = useState("")
    const [terminoContr,setTerminoContr] = useState(false)
    const handleUser = (evento) =>{
        //Donde esta el elemento lo que viene escrtiro
        //por el usuario desde el input de texto?
        // evento.target.value
        setNameUser(evento.target.value)
    }
    const handleTerminos = ()=>{
        setTerminoContr(!terminoContr)

    }
    return(
        <>
        <h1>Usuario</h1>
        <label>Indique un nombre de usuario</label><br/>
        <input type="text" name="usuario" placeholder="Ingrese nombre aquí:" onChange={handleUser}/><br/><br/>
        {
            nameUser == "nombreError" &&
            <p>YA EXISTE ESTE USUARIO</p>
        }<br/>
        <input type="checkbox"  name="terminos " checked={terminoContr} onChange={handleTerminos}/>
        <label htmlFor="terminos">Acepto los terminos de contrato</label><br/><br/>
        <button type="button">Guardar nombre de usuario</button>
        </>
    )
}
export default Usuario;