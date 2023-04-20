import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { access_token } from '../../constant'
import { getCookie, setCookie } from '../../utils/cookie'
import './LoginPage.css'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const isLogin = getCookie(access_token)
    if (isLogin) {
      navigate('/')
    }
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      username,
      password
    }
    setCookie(access_token, username)
    navigate('/')
  }

  return (
    <div className='Wrapper'>
      <form className='form-login' onSubmit={handleSubmit}>
        <>
          <label className='label-login'>Username</label>
          <input
            type='text'
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </>
        <>
          <label className='label-login'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
        <button type='submit' className='todo-btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
