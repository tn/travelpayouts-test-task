import * as React from 'react'

interface IAmountProps {
  currency: string
  amount: number
}

const Amount: React.SFC<IAmountProps> = ({ currency, amount }) => {
  const res = amount.toLocaleString(
    'ru-RU',
    {
      style: 'currency',
      currency: currency.toUpperCase()
    })

  return <React.Fragment>{res}</React.Fragment>
}

export default Amount
