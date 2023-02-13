import React from 'react';

function Date({ props }) {
   return (
      <div className='textContainer' >
         <label htmlFor={props.name}>{props.label}</label>
         <input type="date" id={props.name} onChange={(e) => props.changeFn(e.target.value)} />
      </div>
   );
}

export default Date;