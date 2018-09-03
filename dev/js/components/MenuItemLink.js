import React from 'react';
import ListItem from 'react-md/lib/Lists/ListItem';
import { Link, IndexLink  } from 'react-router';
import FontIcon from 'react-md/lib/FontIcons';
import MenuLabelContainer from './../containers/MenuLabelContainer'


const MenuItemLink = ({intl, label, to, type, icon, iconClass, index}) =>{

    const item =(
        <ListItem
            rightIcon={type ? <MenuLabelContainer type={type}/> : null}
            primaryText={label}
            leftIcon={<FontIcon className={iconClass}>{icon}</FontIcon>}
        />
    )
    if(index){
        return(
            <IndexLink to={to} activeClassName="active-main" >
              {item}
            </IndexLink>
        )
    }
    return(
        <Link to={to} activeClassName="active-main" >
          {item}
        </Link>
    )
}
MenuItemLink.propTypes = {
    label: React.PropTypes.object.isRequired
}
export default MenuItemLink