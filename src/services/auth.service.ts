import { createApi } from '@reduxjs/toolkit/query/react';
import type { AuthRequest, AuthResponse, LoginResponse, RegisterRequest, ResetPasswordRequest, VerifyRequest } from '../types/general';
import { baseQueryWithLogout } from './baseQueryLogout';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithLogout,
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),

    login: builder.mutation<LoginResponse, AuthRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    verifyEmail: builder.mutation<LoginResponse, VerifyRequest>({
      query: (credentials) => ({
        url: '/verify-email',
        method: 'POST',
        body: credentials,
      }),
    }),

    forgotPassword: builder.mutation<LoginResponse, { email: string } >({
      query: (credentials) => ({
        url: '/forgot-password',
        method: 'POST',
        body: credentials,
      }),
    }),

    resetPassword: builder.mutation<LoginResponse, ResetPasswordRequest >({
      query: (credentials) => ({
        url: '/reset-password',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { 
  useRegisterMutation, 
  useLoginMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
 } = authApi;