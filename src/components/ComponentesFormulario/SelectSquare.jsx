import React from 'react';

function SelectSquare({ props }) {
   return (
      <div>
         <input type="checkbox" name="" id={props.name} />
         <label htmlFor={props.name}>{props.label}</label>
      </div>
   );
}

export default SelectSquare;