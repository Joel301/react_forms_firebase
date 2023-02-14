import React from 'react';

function SelectSquare({ props }) {
   return (
      <div>
         <input type="checkbox" name="" id={props.name} onChange={(e) => props.changeFn(e.target.value)} />
         <label htmlFor={props.name}>{props.required ? "*" : null}{props.label}</label>
      </div>
   );
}

export default SelectSquare;