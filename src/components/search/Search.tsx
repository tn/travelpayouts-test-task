import * as React from 'react'
import './Search.css'
import Button from '../button/Button'
import Input from '../input/Input'

const Search: React.SFC = () => (
  <form className='search'>
    <Input labelId='search'>Фильтр</Input>
    <Button component='input' type='reset'>Сбросить</Button>
  </form>
)

export default Search
