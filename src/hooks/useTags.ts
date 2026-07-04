import useRequest from '@/utils/useRequest'
import { TagProps } from '@/@types/tag'

const TAGS_REQUEST = { url: '/tags', method: 'GET' }

export function useTags() {
  const { data, mutate, isValidating } = useRequest<{ tags: TagProps[] }>(
    TAGS_REQUEST,
  )

  return { tags: data?.tags ?? null, mutate, isValidating }
}
