import React from 'react';
import { List, ListItem } from 'react-md/lib/Lists';
import Button from 'react-md/lib/Buttons/Button';
const ChangeLanguage = ({selected, onLanguageChange}) => {

  let enActive = false, plActive = false, esActive = false, ruActive = false, frActive = false
  switch(selected) {
    case "en_EN":
      enActive = true        
      break;
    case "pl_PL":
      plActive = true
      break;
    case "es_ES":
      esActive = true
      break;
    case "ru_RU":
      ruActive = true
      break;
    case "fr_FR":
      frActive = true
      break;
    default:
      enActive = true  
  }
  const handleListClick = (event) =>{
    console.log(event)
  }
  return(
    <List>
      <ListItem onClick={onLanguageChange.bind(this,"en_EN")} active={enActive} primaryText="English" />
      <ListItem onClick={onLanguageChange.bind(this,"pl_PL")} active={plActive} primaryText="Polski" />
      <ListItem onClick={onLanguageChange.bind(this,"es_ES")} active={esActive} primaryText="Español" />
      <ListItem onClick={onLanguageChange.bind(this,"ru_RU")} active={ruActive} primaryText="Pусский" />
      <ListItem onClick={onLanguageChange.bind(this,"fr_FR")} active={frActive} primaryText="Français" />
    </List>
  )
}
export default ChangeLanguage