import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { access_token } from '../constant'
import { getCookie } from '../utils/cookie'

interface Props {
  children: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const auth = getCookie(access_token)
  if (auth) {
    return <>{children}</>
  }

  return <Navigate to='/login' />
}

export default PrivateRoute
