import { baseApi } from "./baseApi";

const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: (priority) => {
                const params = new URLSearchParams()

                if(priority){
                    params.append('priority', priority)
                }
                return {
                    url: '/tasks',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['Task']
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Task']
        }),
    })
})

export const {useGetAllTasksQuery, useAddTaskMutation} = todoApi