import * as React from 'react'
import './Nav.css'

const activeIndex = 6
const itemsArr = new Array(8).fill(1)

const Nav: React.SFC = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      {itemsArr.map((item, index) => (
        <li key={`item${index}`} className='nav__item'>
          <a className={`nav__link ${index === activeIndex ? 'nav__link--active' : ''}`} href='#' />
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
