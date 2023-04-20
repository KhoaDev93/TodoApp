import React from 'react'

const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const TodoPage = React.lazy(() => import('./pages/TodoPage'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const routes = [
  {
    path: '/',
    Element: TodoPage,
    isProtect: true
  },
  {
    path: '/login',
    Element: LoginPage,
    isProtect: false
  },
  {
    path: '*',
    Element: NotFound,
    isProtect: false
  }
]

export default routes
