import baseApi from "../baseApi"; // Import baseApi

// Define the structure of the data object
interface SeasonCompletedOverview {
  success: boolean;
  message: string;
  data: {
    monthlyCounts: {
      [key: string]: number; // Adding index signature to allow string keys
      January: number;
      February: number;
      March: number;
      April: number;
      May: number;
      June: number;
      July: number;
      August: number;
      September: number;
      October: number;
      November: number;
      December: number;
    };
    totalActivities: number;
    bySeason: {
      Winter: number;
      Spring: number;
      Summer: number;
      Autumn: number;
    };
  };
}

interface MonthlyThresholdProgress {
  success: boolean;
  message: string;
  data: {
    months: string; // e.g. "August"
    seasons: string; // e.g. "Autumn (Aug-Oct)"
    totalMiles: string; // e.g. "0.79"
    monthlyThresholdMet: boolean; // e.g. false
    thresholdProgress: string; // e.g. "4%"
  };
}

interface Activity {
  activity: string;
  distance_miles: string; // You can use number if you prefer it as a number
  duration_minutes: number;
  date: string; // You can use Date type if you want to convert it to a Date object
}

interface ActivityResponse {
  success: boolean;
  message: string;
  data: Activity[];
}

interface SeasonCompletionStreak {
  months: string;
  seasons: string;
  monthlyMiles: number;
  seasonalMiles: number;
  monthlyMilesMetGoal: boolean;
  seasonalMilesMetGoal: boolean;
}

interface SeasonCompletionStreakResponse {
  success: boolean;
  message: string;
  data: SeasonCompletionStreak[];
}

interface MonthlyMilesLog {
  months: string;
  seasons: string;
  totalMiles: string; // You can change it to number if the value is numeric
  monthlyThresholdMet: boolean;
}

interface MonthlyMilesLogResponse {
  success: boolean;
  message: string;
  data: MonthlyMilesLog[];
}

interface AdditionalMilesLogged {
  success: boolean;
  message: string;
  data: {
    months: string;
    seasons: string;
    totalMiles: string; // String because the value is a string in your example
    monthlyThresholdMet: boolean;
  }[];
}

interface RecentActivity {
  success: boolean;
  message: string;
  data: {
    activity: string;
    distance_miles: string; // String because the value is a string in your example
    duration_minutes: number; // Number, as it's a number
    date: string; // Date in string format (you can later convert it to a Date object if needed)
  }[];
}

interface ThresholdProgressResponse {
  success: boolean;
  message: string;
  data: ThresholdProgressData;
}

interface ThresholdProgressData {
  months: string;
  seasons: string;
  monthlyMiles: number;
  seasonalMiles: number;
  monthlyMilesMetGoal: boolean;
  seasonalMilesMetGoal: boolean;
  thresholdProgress: string;
}

interface UserDetails {
  success: boolean;
  message: string;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    name: string;
    image: string;
    email: string;
    createdAt: string;
    hasStrava: boolean;
  };
}

interface Passwords {
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;
}

type User = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  hasStrava: boolean;
  phoneNumber: string | null;

  email: string;
  createdAt: string;
  imageUrl: string;
  seasonParticipationCompleted: boolean;
  activityStatus: boolean;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: User[];
};

type User1 = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  createdAt: number;
  updatedAt: number;
  phoneVerified: boolean;
  emailVerified: boolean;
  otpExpiresAt: number | null;
  otp: string | null;
  isActive: boolean;
  lastLoginAt: number;
  loginMethod: string;
  stravaId: string;
  imageUrl: string;
  tokenExpiry: number;
  accessToken: string;
  refreshToken: string;
  role: string;
};

type ResponseData = {
  users: User1[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type ApiResponse1 = {
  success: boolean;
  message: string;
  data: ResponseData;
};

type ActivityData = {
  totalActivities: number;
  lastMonthTotalActivities: number;
  totalDistance: number;
  lastMonthTotalDistance: number;
};

type ApiResponse2 = {
  success: boolean;
  message: string;
  data: ActivityData;
};

type ApiResponse3 = {
  success: boolean;
  message: string;
  data: Record<string, number>;
};

interface UserResponse {
  success: boolean;
  message: string;
  data: UserData;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  role: string;
  createdAt: number;
  updatedAt: number;
  phoneVerified: boolean;
  emailVerified: boolean;
  otpExpiresAt: number | null;
  otp: string | null;
  isActive: boolean;
  lastLoginAt: number;
  loginMethod: string;
  stravaId: string;
  imageUrl: string;
  tokenExpiry: number;
  accessToken: string;
  refreshToken: string;
}
interface UserActivityDetails {
  success: boolean;
  message: string;
  data: {
    totalDistance: number;
    totalSeasonsCompleted: number;
  };
}


type ResponseData1 = {
  success: boolean;
  message: string;
  data: {
    currentSeason: string;
    totalUsersCompletedCurrentSeason: number;
  };
}

export const dashboardApi = baseApi.injectEndpoints({
  // userDashboard
  endpoints: (builder) => ({
    // Season Completed Overview
    // getInfo: builder.query<SeasonCompletedOverview, string>({
    //   //   query: (id: string, year: string) =>
    //   query: (id: string, year: any) => {
    //     // Construct the query string with the year parameter
    //     console.log("Year in Query:", id,year);
    //     const queryString = year ? `?year=${year}` : "";
    //     return `/activities/season-completed-overview/${id}${queryString}`;
    //   },
    getInfo: builder.query<
      SeasonCompletedOverview,
      [string, string | undefined]
    >({
      query: ([id, year]) => {
        // console.log("Year in Query:", year);
        const queryString = year ? `?year=${year}` : "";
        return `/activities/season-completed-overview/${id}${queryString}`;
      },

      // return  {
      //   query: (id) => `/activities/season-completed-overview/${id}`,
      //   `/activities/season-completed-overview/${id}`, // Season overview endpoint
      //   }
    }),

    // Monthly Threshold Progress
    getMontlyThresh: builder.query<MonthlyThresholdProgress, string>({
      query: (id) => `/activities/monthly-threshold-progress/${id}`, // Use a unique endpoint for monthly threshold progress
    }),

    // Activity Data
    getActivity: builder.query<ActivityResponse, string>({
      query: (id) => `/activities/single-user-activity/${id}`, // Unique endpoint for activity data
    }),

    // Season Completion Streak
    getMaraflystreak: builder.query<SeasonCompletionStreakResponse, string>({
      query: (id) => `/activities/season-completion-streak/${id}`, // Unique endpoint for season streak
    }),

    // Monthly Miles Log
    getMonthmiles: builder.query<MonthlyMilesLogResponse, string>({
      query: (id) => `/activities/monthly-miles-log/${id}`, // Unique endpoint for monthly miles log
    }),

    // Additional Miles Logged
    getAddimile: builder.query<AdditionalMilesLogged, string>({
      query: (id) => `/activities/additional-miles-logged/${id}`, // Unique endpoint for additional miles
    }),

    // Recent Activity
    getUsedetail: builder.query<RecentActivity, string>({
      query: (id) => `/activities/recent-activity/${id}`, // Unique endpoint for recent activity
    }),

    // Season Threshold Progress
    getSeasonthres: builder.query<ThresholdProgressResponse, string>({
      query: (id) => `/activities/season-completion-progress/${id}`, // Unique endpoint for season threshold progress
    }),

    getProfile: builder.query<UserDetails, string>({
      query: (id) => `/users/user-details/${id}`,
      //   providesTags: ["User"],
    }),

    getUpdate: builder.query<Passwords, string>({
      query: (id) => `users/update-user-profile/${id}`,
    }),

    //admin

    // user
    getUse: builder.query<ApiResponse, string>({
      query: () => `admin/user-management`,
      //   credentials: "include", //important thing fro accesstoken
    }),

    gettotal: builder.query<ApiResponse1, string>({
      query: () => `admin/users`,
    }),

    gettotalactivity: builder.query<ApiResponse2, string>({
      query: () => `activities/total-activities-last-month`,
    }),

    getcompleteseason: builder.query({
      query: () => `activities/completed-session-last-years`,
    }),

    getadmingraph: builder.query<ApiResponse3, string>({
      query: () => `users/all-registered-user`,
    }),

    getPhone: builder.query<UserResponse, string>({
      query: (id) => `/users/${id}`,
    }),
    getMe: builder.query<UserResponse, string>({
      query: (id) => `/users/${id}`,
    }),

    getmember: builder.query<UserActivityDetails, string>({
      //   query: (id) => `/admin/user-activies-for-admin/${id}`,
      query: (userId) => ({
        url: "/admin/user-activities-for-admin",
        method: "POST",
        body: userId,
      }),
    }),

    getcompletedcurrentseason: builder.query<ResponseData1,string>({
        query: () => `admin/total-users-completed-current-season`,
  }),
  }),
});

export const {
  useGetInfoQuery,
  useGetMontlyThreshQuery,
  useGetActivityQuery,
  useGetMaraflystreakQuery,
  useGetMonthmilesQuery,
  useGetAddimileQuery,
  useGetUsedetailQuery,
  useGetSeasonthresQuery,
  useGetProfileQuery,
  useGetUpdateQuery,
  useGetUseQuery,
  useGettotalQuery,
  useGettotalactivityQuery,
  useGetcompleteseasonQuery,
  useGetadmingraphQuery,
  useGetPhoneQuery,
  useGetMeQuery,
  useGetmemberQuery,
    useGetcompletedcurrentseasonQuery,
} = dashboardApi;
