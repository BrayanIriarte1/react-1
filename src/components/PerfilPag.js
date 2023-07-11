import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"


const PerfilPag = () => {

//Contador de likes una variable numerica
  const [contadorLikes,setContadorLikes] = useState(0)
//variable tipo string
  //const [nombre,setNombre] = useState("")
//Variable booleana
  //const[activo,setActivo] = useState(false)

//como se lee un estado? console.log(contadorLikes)   
//Cómo se cambia el valor de un estado? setContadorLikes(12)   
  const handleContador = () =>{
    setContadorLikes(contadorLikes+1)
  }
  return (
    <>
        <h1>Página de Perfil</h1>
        <p> Hasta Pronto</p>
        <div>
          <Link to="/">Ir a inicio</Link>
        </div><br/>
        <button type="button" onClick={handleContador}> Dar Like</button>
        <p>Conteo de Likes: {contadorLikes}</p><br/>
        USUARIO
        <p>Verifique nomgre del usuario</p><br/>
        
        
    </>
  )
}

export default PerfilPag;