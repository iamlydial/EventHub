import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import store, { AppDispatch as StoreAppDispatch } from "./store";

// Define your types/interfaces here
interface UserData {
  user_id: number;
  name: string;
  email: any;
  telephone_number: string;
  events: string;
  password: number;
}

export interface UserState {
  isLoggedIn: boolean;
  userId: string | null;
  userData: UserData | null;
  error: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userId: null,
  userData: null,
  error: null,
};

export const selectUserState = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => state.user.userData;

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const userData: UserData = await response.json();

      return userData;
    } catch (error) {
      throw new Error("Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }: { dispatch: AppDispatch }) => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        // Other necessary configurations
      });

      if (response.ok) {
        // Dispatch action to update state after successful logout
        dispatch(setUserLoggedInState(false)); // Update isLoggedIn state to false
        dispatch(setUser(null)); ; // Reset user data in the state

        // Clear local storage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData"); // Adjust this according to your implementation

        // Additional cleanup if needed
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      throw new Error("Logout failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
    setUserLoggedInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true; // Set the isLoggedIn state to true upon login
      // You can add other login logic here if needed
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null; // Resetting user data to null upon logout
      console.log("User logged out. UserData:", state.userData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload; // Assigning the userData from the fulfilled action
      state.isLoggedIn = true; // Assuming login success implies the user is logged in
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message as string;
    });
  },
});

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const { setUserLoggedInState, setUser } = userSlice.actions;

// Define AppDispatch here
export type AppDispatch = StoreAppDispatch;

export default userSlice.reducer;
