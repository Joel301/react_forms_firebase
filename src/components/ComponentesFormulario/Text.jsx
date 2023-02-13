import React from 'react';

function Text({ props }) {
   return (
      <div className='textContainer' >
         <label htmlFor={props.name}>{props.label}</label>
         <input type="text" id={props.name} />
      </div>
   );
}

export default Text;