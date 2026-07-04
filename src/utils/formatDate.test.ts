import { describe, it, expect } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats a date string as "Mon D" in en-US', () => {
    expect(formatDate('2026-01-05')).toBe('Jan 5')
  })

  it('formats a Date instance', () => {
    expect(formatDate(new Date('2026-12-25T00:00:00Z'))).toBe('Dec 25')
  })
})
