import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

import { items } from "./../../db.json"
import ComponentesFormulario from './ComponentesFormulario/ComponentesFormulario';


function Formulario(props) {
   const [formProps, setformProps] = useState({});

   async function submitAction(e) {
      e.preventDefault()
      const response = await addDoc(collection(db, 'items'), formProps);
   }

   return (
      <div>
         <h1>Soy un Formulario</h1>
         <form onSubmit={submitAction}>
            {items.map(function (item) {
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