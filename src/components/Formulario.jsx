import React, { useEffect, useState } from 'react';

import { items } from "./../../db.json"
import ComponentesFormulario from './ComponentesFormulario/ComponentesFormulario';

function Formulario(props) {
   const [formProps, setformProps] = useState({});

   function submitAction(e) {
      e.preventDefault()
      console.log(formProps)
   }

   return (
      <div>
         <h1>Soy un Formulario</h1>
         <pre>
            {JSON.stringify(formProps)}
         </pre>
         <form onSubmit={submitAction}>
            {items.map(function (item) {
               // return <li key={item.name + item.type}>{item.type} </li>
               if (item.name == "submit") {
                  item = { ...item, submitAction }
               }
               return <ComponentesFormulario
                  state={[formProps, setformProps]}
                  props={item}
                  key={item.name + item.type} />
            })}
         </form>
      </div>
   );
}

export default Formulario;