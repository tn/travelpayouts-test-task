import * as React from 'react'
import './Sidebar.css'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'

const Sidebar: React.SFC = ({ children }) => (
  <aside className='sidebar'>
    <a href='/'><Logo /></a>
    <Nav />
  </aside>
)

export default Sidebar
