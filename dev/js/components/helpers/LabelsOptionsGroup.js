import React from 'react';
import { Button } from 'react-md';
import Label from './Label';


const LabelsOptionsGroup = ({options, checked}) =>{
    return(
        <div>
            {options.map((option, i) =>(
                checked.indexOf(option.value) > -1 ?
                <Label key={i} label={option.label} green /> :
                <Label key={i} label={option.label} grey />
            ))}
        </div>
    )
}
LabelsOptionsGroup.propTypes = {
    options: React.PropTypes.array.isRequired
}
export default LabelsOptionsGroup