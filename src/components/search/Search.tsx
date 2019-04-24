import * as React from 'react'
import './Search.css'
import Button from '../button/Button'
import Input from '../input/Input'

interface ISearchProps {
  onSearch: Function
}

type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

const Search: React.SFC<ISearchProps> = (props) => {
  const onChange = (event: InputEvent) => {
    props.onSearch(event.currentTarget.value)
  }

  const onReset = (event: FormEvent) => {
    props.onSearch('')
  }

  return (
    <form className='search' onReset={onReset} autoComplete='off'>
      <Input onChange={onChange} labelId='search' autoComplete='off'>Фильтр</Input>
      <Button component='input' type='reset'>Сбросить</Button>
    </form>
  )
}

export default Search
