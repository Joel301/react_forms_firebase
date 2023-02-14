import { map } from '@firebase/util';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { items } from "./../../db.json"

function Resultados(props) {
   const [data, setData] = useState([]);

   const getData = async function () {
      const response = await getDocs(collection(db, 'items'));
      const dataset = [];
      response.forEach(doc => {
         dataset.push({ ...doc.data(), id: doc.id })
      })
      setData(dataset);
   }

   const doGetData = function () {
      if (data.length < 1) {
         getData();
      }
   }


   useEffect(() => doGetData(), []);

   return (
      <div>
         <table>
            <thead>
               <tr>
                  {items.filter((item) => item.type != "submit").map(function (encabezado) {
                     return <th key={'encabezado' + encabezado.label}>{encabezado.label}</th>
                  })}
               </tr>
            </thead>
            <tbody>
               {data.length > 1
                  ? data.map(function (registro) {
                     return <tr key={'columna_' + Math.random(100)}>
                        {items.filter((item) => item.required).map(function (item) {
                           return <th key={'columna_' + Math.random(100) + registro.id + registro.label}>
                              {registro[item.name]}
                           </th>
                        })}
                     </tr>
                  })
                  : null}
            </tbody>
         </table>
         {console.log(data)}
         {console.log(items)}
      </div>
   );
}

export default Resultados;