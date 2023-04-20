import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface PropsTodo {
  task: any
  deleteTodo: any
  editTodo: any
  toggleComplete: any
}

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }: PropsTodo) => {
  return (
    <div className='Todo' onDoubleClick={() => editTodo(task.id)}>
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
