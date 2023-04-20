import { ReactNode, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './layouts/PrivateRoute'
import routes from './routes'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            {routes.map(({ path, Element, isProtect }) => {
              if (isProtect) {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <PrivateRoute>
                        <Element />
                      </PrivateRoute>
                    }
                  />
                )
              }

              return <Route key={path} path={path} element={<Element />} />
            })}
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
