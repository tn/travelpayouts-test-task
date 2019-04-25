import * as React from 'react'
import './Search.css'
import Button from '../button/Button'
import Input from '../input/Input'
import LangContext from '../../Context'

interface ISearchProps {
  onSearch: Function
}

type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

const Search: React.SFC<ISearchProps> = (props) => {
  const l = React.useContext(LangContext)
  const onChange = (event: InputEvent) => {
    props.onSearch(event.currentTarget.value)
  }

  const onReset = (event: FormEvent) => {
    props.onSearch('')
  }

  return (
    <form className='search' onReset={onReset} autoComplete='off'>
      <Input onChange={onChange} type='text' labelId='search' autoComplete='off'>{l('filter')}</Input>
      <Button component='input' type='reset' value={l('reset')} />
    </form>
  )
}

export default Search
