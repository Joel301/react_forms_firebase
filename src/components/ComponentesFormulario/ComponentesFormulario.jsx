import React from 'react';
import Date from './Date';
import Select from './Select';
import SelectSquare from './SelectSquare';
import Text from './Text';
import TextEmail from './TextEmail';

function ComponentesFormulario({ props,state}) {
   function changeFn(){
      return function(){
         
      }
   }
   console.log(state)

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

   return (
      <div key={'container_component' + props.type + props.name}>
         soy un item radom por desarrollar {props.type} + {props.name}
      </div>
   );
}

export default ComponentesFormulario;