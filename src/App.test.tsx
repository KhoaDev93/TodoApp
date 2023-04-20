import matchers from '@testing-library/jest-dom/matchers'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import App from './App'
expect.extend(matchers)

import { Route, Routes } from 'react-router-dom'
import PrivateRoute from 'src/layouts/PrivateRoute'
import { it } from 'vitest'

describe('App', () => {
  it('renders PrivateRoute if the user is logged in', () => {
    const accessToken = 'fake-access-token'
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: `access_token=${accessToken}`
    })

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path={'/'}
            element={
              <PrivateRoute>
                <div>Private content</div>
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Private content')).toBeInTheDocument()
  })

  it('redirects to the login page if the user is not logged in', async () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: ''
    })

    render(<App />, { wrapper: MemoryRouter })
    await waitFor(() => {
      expect(screen.queryByText(/Login/i)).toBeInTheDocument()
    })
  })
})
