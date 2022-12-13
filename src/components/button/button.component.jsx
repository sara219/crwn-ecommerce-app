/*
three diff type of button: 
1. default 
2. inverted 
3. google sing in
*/

import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomBtn = getButton(buttonType)
  return <CustomBtn {...otherProps}>{children}</CustomBtn>
}

export default Button
