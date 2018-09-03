import React from 'react';
import { Button, MenuButton, Switch  } from 'react-md';


const MenuSwitchGroup = ({id, options, checked, onClick}) =>{
    let menuItems =[];
    options.forEach(option => {
        let isChecked = checked.indexOf(option.value) > -1 ? true : false;
        menuItems.push(
            {
                primaryText: option.label,
                rightIcon: <Switch
                    id={option.value}
                    type="switch"
                    name="power"
                    label=""
                    checked={isChecked}
                    onChange={onClick.bind(this, id, option.value)}
                />
            }
        )
    });
    return(
        <MenuButton
            id={id}
            icon
            menuItems={menuItems}
            >
            more_vert
        </MenuButton>
    )
}
MenuSwitchGroup.propTypes = {
    options: React.PropTypes.array.isRequired
}
export default MenuSwitchGroup