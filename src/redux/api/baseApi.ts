import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://task-management-seequenze-tech-server.vercel.app' }),
    tagTypes: ['Task'],
    endpoints: () => ({}),
})
