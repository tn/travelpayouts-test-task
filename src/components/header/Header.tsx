import * as React from 'react'
import './Header.css'
import axios from 'axios'
import AmountFormat from '../amount/Amount'

interface IAmounts {
  balance: number
  payout: number
  currency: string
}

const Header: React.SFC = () => {
  const [amounts, setAmounts] = React.useState<IAmounts>({ balance: 0, payout: 0, currency: 'rub' })

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://localhost:3000/header')

        setAmounts({
          balance: res.data.balance,
          payout: res.data.next_payout,
          currency: res.data.currency
        })
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <header className='header'>
      <div className='header__detail'>
        <span className='header__detail__label'>Баланс</span>
        <span className='header__detail__amount'>
          <AmountFormat currency={amounts.currency} amount={amounts.balance} />
        </span>
      </div>
      <div className='header__detail'>
        <span className='header__detail__label'>К выплате</span>
        <span className='header__detail__amount'>
          <AmountFormat currency={amounts.currency} amount={amounts.payout} />
        </span>
      </div>
    </header>
  )
}

export default Header
