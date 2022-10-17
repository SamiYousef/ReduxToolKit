import { createSlice } from "@reduxjs/toolkit";
import { RootStore } from "../../app/store";

export interface IUser {
  id: string;
  name: string;
}

const initialState: IUser[] = [
  { id: "1", name: "Samy Nagy" },
  { id: "2", name: "Mina Talat" },
  { id: "3", name: "Emad Adel" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllUers = (state: RootStore) => state.users;

export default usersSlice.reducer;
