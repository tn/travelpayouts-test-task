import * as React from 'react'
import './Card.css'
import Button from '../button/Button'
import Input from '../input/Input'

const Card: React.SFC = () => (
  <div className='card'>
    <div className='card__info'>
      <h3 className='card__title'>Name</h3>
      <div className='card__desc'>Desc</div>
    </div>
    <div className='card__action'>
      <Input labelId='promocode' value='Travelpayouts' readOnly={true}>Промокод</Input>
      <button className='card__copy'>Copy</button>
    </div>
    <Button primary={true}>Получить бонус</Button>
  </div>
)

export default Card
