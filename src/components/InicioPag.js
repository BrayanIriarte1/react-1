import React, { useEffect, useSate} from "react";
import {Link} from "react-router-dom"
const InicioPag = () => {
  return (
      <>
        <h1>Página de Inicio</h1>
        <p> Bienvenidos</p>
        <div>
          <a href="/perfil">Ir a Perfil </a> <br></br>
          <Link to="/perfil">Ir a Perfil </Link><br/>
          <Link to="/usuario">Ir a usuario</Link>
          
        </div>
      </>
    
  )
}

export default InicioPag;