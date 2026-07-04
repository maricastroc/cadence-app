import { darken } from '@/utils/darken'

const BOARD_COLORS = [
  '#14B8A6',
  '#3B82F6',
  '#E8638F',
  '#E0A53B',
  '#8B5CF6',
  '#22C55E',
  '#F0795B',
  '#56C7E8',
]

export const getBoardColor = (name: string) => {
  const sum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return BOARD_COLORS[sum % BOARD_COLORS.length]
}

/**
 * Board avatar: a solid, mid-tone chip of the board colour with a white initial,
 * in both themes. Opaque (no semi-transparent fills) and saturated enough to
 * stand out on the neutral-grey active row as well as the darker sidebar.
 */
export const getBoardAvatarStyle = (name: string) => {
  const base = getBoardColor(name)
  return { backgroundColor: darken(base), color: '#FFFFFF' }
}
