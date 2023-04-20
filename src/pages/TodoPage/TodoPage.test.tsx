import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { beforeEach, describe, expect, test } from 'vitest'
import TodoPage from './TodoPage'

describe('TodoPage component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should add a todo item', () => {
    render(<TodoPage />, { wrapper: BrowserRouter })
    const input = screen.getByPlaceholderText(/What is the task today/i)
    const submitBtn = screen.getByRole('button', { name: /Add Task/i })
    fireEvent.change(input, { target: { value: 'Hit the gym' } })
    fireEvent.click(submitBtn)

    const task = screen.getByText(/Hit the gym/i)
    expect(task).toBeInTheDocument()

    const savedTodos = JSON.parse(localStorage.getItem('todos') as string)
    expect(savedTodos.length).toBe(1)
  })

  test('should calcel edit a todo item when blur', () => {
    render(<TodoPage />, { wrapper: BrowserRouter })
    const targetDiv = screen.getByText('Hit the gym')
    fireEvent.dblClick(targetDiv)
    const input = screen.getByDisplayValue('Hit the gym')
    expect(input).toBeInTheDocument()
    fireEvent.focusOut(input)
    expect(input).not.toBeInTheDocument()
  })

  test('should edit a todo item', () => {
    const newTask = 'Hit the book'
    render(<TodoPage />, { wrapper: BrowserRouter })
    const targetDiv = screen.getByText('Hit the gym')
    fireEvent.dblClick(targetDiv)
    const input = screen.getByDisplayValue('Hit the gym')
    fireEvent.change(input, { target: { value: newTask } })
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 })
    const task = screen.getByText(newTask)
    expect(task).toBeInTheDocument()
  })

  test('should delete a todo item', () => {
    render(<TodoPage />, { wrapper: BrowserRouter })
    const svgEl = document.querySelector("[data-icon='trash']") as HTMLImageElement
    fireEvent.click(svgEl)

    const task = screen.queryByText(/Hit the book/i)
    expect(task).not.toBeInTheDocument()
  })
})
