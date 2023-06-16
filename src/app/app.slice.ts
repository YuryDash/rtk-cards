import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { boolean } from "yargs";

export const appSlice = createSlice({
  // name должен быть уникальным и будет использоваться в качетве приставки (redux ducks)
  name: "app",
  // Инициализационный стейт
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});
// Создаем reducer с помощью slice
export const appReducer = appSlice.reducer;
// Action creators создаются автоматически для каждого подредьюсера
// Все экшены упаковываем в объект. В дальнейшем пригодится
export const appActions = appSlice.actions;
