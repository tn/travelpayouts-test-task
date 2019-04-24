import * as React from 'react'
import './Header.css'

interface IHeaderProps {
  balance: number
  invoice: number
}

const Header: React.SFC<IHeaderProps> = ({ balance, invoice }) => (
  <header className='header'>
    <div className='header__detail'>
      <span className='header__detail__label'>Баланс</span>
      <span className='header__detail__amount'>{balance} ₽</span>
    </div>
    <div className='header__detail'>
      <span className='header__detail__label'>К выплате</span>
      <span className='header__detail__amount'>{invoice} ₽</span>
    </div>
  </header>
)

export default Header
