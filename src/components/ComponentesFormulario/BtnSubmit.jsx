import React from 'react';

function BtnSubmit(props) {
   return (
      <div>
         <input type="submit" value={props.label} />
      </div>
   );
}

export default BtnSubmit;