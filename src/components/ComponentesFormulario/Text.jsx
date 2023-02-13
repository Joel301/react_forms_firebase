import React from 'react';

function Text({ props }) {
   return (
      <div className='textContainer' >
         <label htmlFor={props.name}>{props.label}</label>
         <input type="text" id={props.name} onChange={(e) => props.changeFn(e.target.value)} />
      </div>
   );
}

export default Text;