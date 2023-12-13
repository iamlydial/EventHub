import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UserData {
  message: string;
  user: {
    ID: number;
    email: string;
    events: any; // Change 'any' to the appropriate type
    name: string;
    telephone_number: string;
  };
}

export interface UserState {
  isLoggedIn: boolean;
  userData: UserData | null; // Typing the userData based on the expected backend response
  error: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
  error: null,
};

export const selectUserState = (state: RootState) => state.user;

export const selectUserData = createSelector(
  selectUserState,
  (user) => user.userData
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedInState: (state, action) => {
      state.isLoggedIn = action.payload;
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
export const { setUserLoggedInState } = userSlice.actions;

export default userSlice.reducer;
