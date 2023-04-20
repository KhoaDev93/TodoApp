import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFound() {
  return (
    <main className='WrapperNotFoundPage'>
      <h1>404</h1>
      <div>Page Not Found</div>
      <button className='todo-btn'>
        <Link to='/'>Go Home</Link>
      </button>
    </main>
  )
}
