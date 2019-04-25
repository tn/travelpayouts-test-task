import * as React from 'react'
import './Button.css'

interface IButtonProps {
  primary?: boolean
  component?: any
  type?: string
  value?: string
}

const Button: React.SFC<IButtonProps> = ({ children, primary, component: Component = 'button', ...rest }) => (
  Component === 'input'
    ? <Component className={`button ${primary ? 'button--primary' : ''}`} {...rest} />
    : <Component className={`button ${primary ? 'button--primary' : ''}`} {...rest}>{children}</Component>
)

export default Button
