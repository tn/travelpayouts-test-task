import * as React from 'react'
import './Footer.css'

const currentYear = new Date().getFullYear()

const Footer: React.SFC = () => (
  <footer className='footer'>&copy; Travelpayouts, 2011&mdash;{currentYear}</footer>
)

export default Footer
