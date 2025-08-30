// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://10.0.30.156:5004/api/v1", // Now points to your proxy
    baseUrl: "http://172.252.13.71:5004/api/v1", // Now points to your proxy
    // baseUrl: "https://d6482e3392d0.ngrok-free.app/api/v1", // Now points to your proxy
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      //   console.log("Token from Cookies:", token); // Log the token for debugging

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  // tagTypes: ["User"],
});

// Export hooks for usage in functional components
export default baseApi;
