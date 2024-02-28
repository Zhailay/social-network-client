import { Post } from "../types"
import { api } from "./api"

export const postApi = api.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<Post, { content: string }>({
      query: postData => ({
        url: "/posts",
        method: "POST",
        body: postData,
      }),
    }),
    getAllposts: builder.query<Post[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
    deletePost: builder.mutation<void, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreatePostMutation,
  useGetAllpostsQuery,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useLazyGetAllpostsQuery,
  useLazyGetPostByIdQuery,
} = postApi

export const {
  endpoints: { createPost, getAllposts, getPostById, deletePost },
} = postApi
