import * as React from 'react'
import './Input.css'

interface IInputProps {
  labelId: string
  value?: string
  readOnly?: boolean
}

const Input: React.SFC<IInputProps> = ({ children, labelId, ...rest }) => (
  <React.Fragment>
    <label className='field__label' htmlFor={labelId}>{children}</label>
    <input className='field' id={labelId} {...rest} />
  </React.Fragment>
)

export default Input
