import React from 'react';
import { Link, useNavigate } from "react-router-dom"

function MinimalNavbar(props) {
   return (
      <div>
         <Link to="/"> Formulario</Link>
         <Link to="/resultados"> Resultados</Link>
      </div>
   );
}

export default MinimalNavbar;