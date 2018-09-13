import React from 'react';
import {FormattedMessage} from 'react-intl';


export const email = function(value) {
  return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  <FormattedMessage id="Validate.invalidEmailAddress" defaultMessage="Invalid e-mail address" /> : undefined)
}
export const emptyPassword = function(value){
  if(!value || value == "") return <FormattedMessage id="Validate.pleaseFillPassword" defaultMessage="Please fill password" />
  else return undefined
}
export const passwordMatch = function (value, allValues){
  if(!value || value == "") return <FormattedMessage id="Validate.pleaseFillPassword2" defaultMessage="Please fill password" />
  else if(value !=allValues.newPass) return <FormattedMessage id="Validate.passwordsDontMatch" defaultMessage="Passwords don't match" />
  else return undefined
}