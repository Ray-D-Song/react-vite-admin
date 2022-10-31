import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './scenes/global/Sidebar'
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard'

function App (): JSX.Element {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    // @ts-expect-error
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <Sidebar isSiderbar={isSidebar}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar}/>
              <Routes>
                <Route path='/' element={<Dashboard />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
