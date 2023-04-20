import React, { useState, useRef, useEffect, ReactNode } from 'react'

interface Props {
  editTodo: (value: string, id: string) => void
  cancelEditTodo: (id: string) => void
  task: any
}

export const EditTodoForm = ({ editTodo, cancelEditTodo, task }: Props) => {
  const [value, setValue] = useState(task.task)
  const formRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const onSubmit = () => {
    editTodo(value, task.id)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value) {
      e.preventDefault()
      onSubmit()
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      cancelEditTodo(task.id)
    }
  }

  const onBlur = () => {
    cancelEditTodo(task.id)
  }
  return (
    <form ref={formRef} onBlur={onBlur} className='TodoForm'>
      <input
        ref={inputRef}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        className='todo-input'
        placeholder='Update task'
      />
    </form>
  )
}
