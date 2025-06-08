import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CreateConversationRequest,
  CreateConversationResponse,
  CreateMessageRequest,
  GetConversationRequest,
  GetConversationResponse,
} from './conversations.dto.js';

export const conversationsApi = createApi({
  reducerPath: 'conversations/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env['VITE_APP_API_URL']}/conversations`,
  }),
  endpoints: (build) => ({
    getConversationById: build.query<
      GetConversationResponse,
      GetConversationRequest
    >({
      query: ({ id }) => id,
    }),
    createConversation: build.query<
      CreateConversationResponse,
      CreateConversationRequest
    >({
      query: (dto) => ({
        url: '',
        method: 'POST',
        body: dto,
      }),
    }),
    createMessage: build.query<
      GetConversationResponse,
      CreateMessageRequest & { id: CreateConversationResponse['id'] }
    >({
      query: (dto) => ({
        url: `${dto.id}/messages`,
        method: 'POST',
        body: dto,
      }),
    }),
  }),
});

export const {
  useGetConversationByIdQuery,
  useLazyCreateConversationQuery,
  useLazyCreateMessageQuery,
} = conversationsApi;
