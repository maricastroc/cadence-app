import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useMemo } from 'react'
import { api } from '@/lib/axios'

export type GetRequest = AxiosRequestConfig | null

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'isLoading' | 'error' | 'mutate'
  > {
  data: Data | undefined
  response: AxiosResponse<Data> | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pagination: any
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'fallbackData'
  > {
  fallbackData?: Data
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    isLoading,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => api.request<Data>(request!),
    {
      ...config,
      revalidateOnFocus: false,
      dedupingInterval: 5000,
      fallbackData:
        fallbackData &&
        ({
          status: 200,
          statusText: 'InitialData',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          config: request!,
          headers: {},
          data: fallbackData,
        } as AxiosResponse<Data>),
    },
  )

  const responseData =
    response && response.data && (Object.values(response.data)[0] as Data)

  const pagination = useMemo(() => ({ ...response?.data }), [response?.data])

  return {
    data:
      typeof responseData === 'number'
        ? response && response.data
        : responseData,
    response,
    error,
    isValidating,
    isLoading,
    mutate,
    pagination,
  }
}
