import React from 'react';
import BtnSubmit from './BtnSubmit';
import Date from './Date';
import Select from './Select';
import SelectSquare from './SelectSquare';
import Text from './Text';
import TextEmail from './TextEmail';

function ComponentesFormulario({ props, state }) {
   function changeFn(props, state) {
      const [formProps, setformProps] = state
      return function (changeValue) {
         return setformProps({ ...formProps, [props.name]: changeValue })
      }
   }
   props['changeFn'] = changeFn(props, state);

   if (props.type == "text") {
      return <Text props={props} key={'container_component' + props.type + props.name} />
   }
   if (props.type == "email") {
      return <TextEmail props={props} key={'container_component' + props.type + props.name} />
   }
   if (props.type == "date") {
      return <Date props={props} key={'container_component' + props.type + props.name} />
   }
   if (props.type == "select") {
      return <Select props={props} key={'container_component' + props.type + props.name} />
   }
   if (props.type == "checkbox") {
      return <SelectSquare props={props} key={'container_component' + props.type + props.name} />
   }
   if (props.type == "submit") {
      return <BtnSubmit props={props} key={'container_component' + props.type + props.name} />
   }

   return (
      <div key={'container_component' + props.type + props.name}>
         soy un item por desarrollar {props.type} + {props.name}
         <pre>
            {JSON.stringify(props)}
         </pre>
      </div>
   );
}

export default ComponentesFormulario;