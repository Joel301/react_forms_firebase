import React from 'react';

function TextEmail({ props }) {
   return (
      <div className='textContainer textEmailContainer' >
         <label htmlFor={props.name}>{props.label}</label>
         <input type="email" id={props.name} onChange={(e) => props.changeFn(e.target.value)} />
      </div>
   );
}

export default TextEmail;