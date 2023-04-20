import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

import { defineConfig } from 'vitest/config'
expect.extend(matchers)

export default defineConfig({
  test: {
    environment: 'jsdom'
  }
})
