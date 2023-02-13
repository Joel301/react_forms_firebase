import React from 'react';

function TextEmail({ props }) {
   return (
      <div className='textContainer textEmailContainer' >
         <label htmlFor={props.name}>{props.label}</label>
         <input type="email" id={props.name} />
      </div>
   );
}

export default TextEmail;