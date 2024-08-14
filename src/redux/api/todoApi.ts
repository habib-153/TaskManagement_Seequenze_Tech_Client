import { baseApi } from "./baseApi";

const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    getSingleTask: builder.query({
      query: (id) => {
        return {
          url: `/tasks/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ payload, id }) => {
        //console.log(payload)
        return {
          url: `/tasks/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => {
        return {
          url: `/tasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useAddTaskMutation,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = todoApi;
