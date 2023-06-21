import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
