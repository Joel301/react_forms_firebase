import React, { useEffect, useState } from 'react';

import { items } from "./../../db.json"
import ComponentesFormulario from './ComponentesFormulario/ComponentesFormulario';

function Formulario(props) {
   const [formProps, setformProps] = useState({});
   // useEffect(() => {
   //    console.log(items)

   // })
   return (
      <div>
         <h1>Soy un Formulario</h1>
         <div>Soy un input <label htmlFor="">Soy un input</label> <input type="text" /></div>
         <ul>
            {items.map(function (item) {
               // return <li key={item.name + item.type}>{item.type} </li>
               return <ComponentesFormulario state={[formProps, setformProps]} props={item} key={item.name + item.type} />
            })}
         </ul>
      </div>
   );
}

export default Formulario;