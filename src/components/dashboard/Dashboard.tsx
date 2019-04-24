import * as React from 'react'
import './Dashboard.css'
import Search from '../search/Search'
import Card from '../card/Card'

const Dashboard: React.SFC = () => (
  <main className='dashboard'>
    <h1 className='dashboard__title'>Сервисы</h1>
    <Search />
    <Card />
    <Card />
    <Card />
    <Card />
  </main>
)

export default Dashboard
