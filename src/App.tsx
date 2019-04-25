import * as React from 'react'
import { render } from 'react-dom'
import Sidebar from './components/sidebar/Sidebar'
import Layout from './components/layout/Layout'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/Footer'
import LangContext, { createLocalization } from './Context'

import './App.css'

render(
  (
    <LangContext.Provider value={createLocalization}>
      <Layout>
        <Sidebar />
        <div>
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </Layout>
    </LangContext.Provider>
  ),
  document.getElementById('root') || document.createElement('div')
)
