import * as React from 'react'
import './Input.css'

interface IInputProps {
  labelId: string
  value?: string
  readOnly?: boolean
  onChange?: React.ChangeEventHandler
  autoComplete?: string
  ref?: any
}

let Input: React.SFC<IInputProps> = ({ children, labelId, ...rest }, ref) => {
  const inputRef = React.useRef() as any

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    select: () => {
      inputRef.current.select()
    }
  }))

  return (
    <React.Fragment>
      <label className='field__label' htmlFor={labelId}>{children}</label>
      <input ref={inputRef} className='field' id={labelId} {...rest} />
    </React.Fragment>
  )
}

Input = React.forwardRef(Input)

export default Input
