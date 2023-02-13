import React from 'react';

function Select({ props }) {
   return (
      <div>
         <label htmlFor={props.name}>{props.label}</label>
         <select name="" id={props.name} onChange={(e) => props.changeFn(e.target.value)}>
            <option value={'null'}>selecciona</option>
            {props.options.map(function (option) {
               return <option key={'option_' + option.value} value={option.value}>{option.label}</option>
            })}
         </select>
      </div>
   );
}

export default Select;