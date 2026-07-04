import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

process.env.TZ = 'UTC'

afterEach(() => {
  cleanup()
})
