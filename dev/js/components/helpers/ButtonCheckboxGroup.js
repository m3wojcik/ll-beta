import React from 'react';
import { Button } from 'react-md';


const ButtonCheckboxGroup = ({id, options, checked, onClick}) =>{
    //console.log('ButtonCheckboxGroup', options, checked)
    return(
        <div>
            {options.map((option, i) =>(
                checked.indexOf(option.value) > -1 ?
                <Button key={i} flat primary swapTheming iconChildren="done"  onClick={onClick.bind(this, id, option.value)}>{option.label}</Button> :
                <Button key={i} flat iconChildren="close" onClick={onClick.bind(this, id, option.value)}>{option.label}</Button>
            ))}
        </div>
    )
}
ButtonCheckboxGroup.propTypes = {
    options: React.PropTypes.array.isRequired
}
export default ButtonCheckboxGroup