import * as React from 'react'
import './Layout.css'

const Layout: React.SFC = ({ children }) => (
  <div className='layout'>
    {children}
  </div>
)

export default Layout
