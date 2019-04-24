import * as React from 'react'
import './Card.css'
import Button from '../button/Button'
import Input from '../input/Input'

interface ICardProps {
  title: string
  desc?: string
  link: string
  promo: string
}

const Card: React.SFC<ICardProps> = (props) => {
  const inputRef = React.useRef() as any
  const [isCopied, setCopied] = React.useState(false)

  const onCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    inputRef.current.focus()
    inputRef.current.select()

    try {
      const copied = document.execCommand('copy')
      setCopied(!!copied)
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='card'>
      <div className='card__info'>
        <h3 className='card__title'>
          <a className='card__link' href={props.link} rel='noopener nofollow' target='_blank'>{props.title}</a>
        </h3>
        <div className='card__desc'>{props.desc}</div>
      </div>
      <div className='card__action'>
        <Input ref={inputRef} labelId='promocode' value={props.promo} readOnly={true}>Промокод {isCopied ? '(Скопировано в буфер обмена)' : ''}</Input>
        <button className='card__copy' onClick={onCopy}>Copy</button>
      </div>
      <Button primary={true}>Получить бонус</Button>
    </div>
  )
}

export default Card
