import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { access_token } from 'src/constant'
import { removeCookie } from 'src/utils/cookie'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './components/EditTodoForm'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
uuidv4()

interface TodoItem {
  completed: boolean
  id: string
  isEditing: boolean
  task: string
}

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') as string) || []
    setTodos(savedTodos)
  }, [])

  const addTodo = (task: string) => {
    const newTodos: any = [...todos, { id: uuidv4(), task: task, completed: false, isEditing: false }]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const toggleComplete = (id: string) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  }

  const editTask = (task: string, id: string) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const cancelEditTask = (id: string) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, isEditing: false } : todo))
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleLogout = () => {
    removeCookie(access_token)
    navigate('/login')
  }

  return (
    <div className='Wrapper'>
      <h1>To Do List</h1>
      <button onClick={handleLogout} className='todo-btn'>
        Logout
      </button>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} cancelEditTodo={cancelEditTask} />
        ) : (
          <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </div>
  )
}

export default TodoPage
