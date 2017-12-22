import React from 'react';
import { Button } from 'react-md';

const ButtonCheckboxGroup = ({values, onClick}) =>{
    console.log('ButtonCheckboxGroup', values)
    return(
       <div>
           {values.map((value,i) =>(
               value.value ?
                <Button key={i} flat primary swapTheming iconChildren="done"  onClick={onClick.bind(this, value)}>{value.label}</Button> :
                <Button key={i} flat iconChildren="close" onClick={onClick.bind(this, value)}>{value.label}</Button>
           ))}
       </div>
    )
}
ButtonCheckboxGroup.propTypes = {
    values: React.PropTypes.array.isRequired
}
export default ButtonCheckboxGroup