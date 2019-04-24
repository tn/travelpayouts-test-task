import * as React from 'react'
import './Dashboard.css'
import Search from '../search/Search'
import Card from '../card/Card'
import axios from 'axios'

interface IBonusData {
  title: string
  description?: string
  link: string
  promocode: string
}

let timeout: any = undefined

const Dashboard: React.SFC = () => {
  const [bonuses, setBonuses] = React.useState<IBonusData[]>([])
  const [query, setQuery] = React.useState<string>('')
  const [error, setError] = React.useState<string>(null)
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [isFirstRender, setFirstRender] = React.useState<boolean>(true)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`http://localhost:3000/bonuses?title_like=${query}`)

        console.log(res)

        setLoading(false)
        setBonuses(res.data)
      } catch (err) {
        setError(err.message)
      }
    }

    if (isFirstRender) {
      setFirstRender(false)
      fetchData()
    }

    if (!isFirstRender) {
      setLoading(true)

      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(fetchData, 1000)
    }
  }, [query])

  const onSearch = (q: string) => {
    setError('')
    setQuery(q)
  }

  return (
    <main className='dashboard'>
      <h1 className='dashboard__title'>Сервисы</h1>
      <Search onSearch={onSearch} />
      {isLoading && <div className='loader'>↻</div>}
      {error && <div className='error'>{error} 🤔</div>}
      {bonuses.length === 0 && !error ? 'По вашему запросу ничего не найдено 😔' : null}
      {bonuses && bonuses.map((bonus: IBonusData) => (
        <Card
          key={bonus.title}
          title={bonus.title}
          desc={bonus.description}
          link={bonus.link}
          promo={bonus.promocode}
        />
      ))}
    </main>
  )
}

export default Dashboard
