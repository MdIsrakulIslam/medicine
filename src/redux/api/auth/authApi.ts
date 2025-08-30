import baseApi from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body) => {
        // console.log("signIn Request Body:", body); // Log the body
        return {
          url: "/unified-auth/login",
          method: "POST",
          body,
        };
      },
      //   invalidatesTags: ["User"], // Invalidates user-related cached data
    }),
    signUp: builder.mutation({
      query: (body) => {
        // console.log("signUp Request Body:", body); // Log the body
        return {
          url: "/unified-auth/register",
          method: "POST",
          body,
        };
      },
      //   invalidatesTags: ["User"],
    }),
    signOut: builder.mutation({
      query: () => {
        return {
          url: "/unified-auth/logout",
          method: "POST",
        };
      },
      //   invalidatesTags: ["User"],
    }),
    verifyEmail: builder.mutation({
      query: (body) => {
        // console.log("verifyEmail Request Body:", body); // Log the body
        return {
          url: "/unified-auth/verify-otp",
          method: "POST",
          body,
        };
      },
    }),
    resendCode: builder.mutation({
      query: (body) => {
        // console.log("resendCode Request Body:", body); // Log the body
        return {
          url: "/unified-auth/send-otp",
          method: "POST",
          body,
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: (body) => {
        // console.log("forgetPassword Request Body:", body); // Log the body
        return {
          url: "/unified-auth/forgot-password",
          method: "POST",
          body,
        };
      },
    }),
    //In profile.tsx, the resetPassword mutation is used to update user profile details
    // resetPassword: builder.mutation({
    //   query: ({
    //     userId,
    //     name,
    //     phoneNumber,
    //     newPassword,
    //     oldPassword,
    //     confirmPassword,
    //     imageUrl,
    //   }) => {
    //     console.log("resetPassword Request Body:", {
    //       name,
    //       phoneNumber,
    //       newPassword,
    //       oldPassword,
    //       confirmPassword,
    //       imageUrl,
    //     }); // Log the body
    //     return {
    //       url: `users/update-user-profile/${userId}`,
    //       method: "PATCH",
    //       body: {
    //         name,
    //         phoneNumber,
    //         newPassword,
    //         oldPassword,
    //         confirmPassword,
    //         imageUrl,
    //       },
    //     };
    //   },
    // //   invalidatesTags: ["User"],
    // }),
    resetPassword: builder.mutation({
      query: ({
        userId,
        firstName,
        lastName,
        phoneNumber,
        newPassword,
        oldPassword,
        confirmPassword,
        imageUrl,
      }) => {
        console.log("resetPassword Request Body:", {
          firstName,
          lastName,
          phoneNumber,
          newPassword,
          oldPassword,
          confirmPassword,
          imageUrl,
        }); // Log the body
        return {
          url: `users/update-user-profile/${userId}`,
          method: "PATCH",
          body: {
            firstName,
            lastName,
            phoneNumber,
            newPassword,
            oldPassword,
            confirmPassword,
            imageUrl,
          },
        };
      },
      //   invalidatesTags: ["User"],
    }),
    setNewPassword: builder.mutation({
      query: ({
        accessToken,
        newPassword,

        confirmPassword,
      }) => {
        console.log("resetPassword Request Body:", {
          accessToken,
          newPassword,
          confirmPassword,
        }); // Log the body
        return {
          url: `unified-auth/reset-password?token=${accessToken}`,
          method: "POST",
          body: {
            newPassword,

            confirmPassword,
          },
        };
      },
      //   invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useVerifyEmailMutation,
  useResendCodeMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useSetNewPasswordMutation,
  useSignOutMutation,
} = authApi;
