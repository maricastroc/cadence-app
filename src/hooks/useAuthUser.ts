import useRequest from '@/utils/useRequest'

interface AuthUser {
  id: number | string
  name: string
  email: string
}

const USER_REQUEST = { url: '/user', method: 'GET' }

export function useAuthUser() {
  const { data, error, mutate } = useRequest<AuthUser>(USER_REQUEST, {
    shouldRetryOnError: false,
  })

  return {
    user: data ?? null,
    isAuthenticated: !!data && !error,
    isLoading: data === undefined && error === undefined,
    mutate,
  }
}
