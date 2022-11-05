import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { useState, ReactElement } from 'react'
import Sidebar from './scenes/global/Sidebar'
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard'
import Bar from './scenes/bar'
import Calendar from './scenes/calendar'
import Contacts from './scenes/contacts'
import FAQ from './scenes/faq'
import Form from './scenes/form'
import Geography from './scenes/geography'
import Invoices from './scenes/invoices'
import Pie from './scenes/pie'
import Team from './scenes/team'
import Line from './scenes/line'

function App (): ReactElement {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <Sidebar isSiderbar={isSidebar}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar}/>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/bar' element={<Bar />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/form" element={<Form />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/team" element={<Team />} />
                <Route path="/line" element={<Line />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
