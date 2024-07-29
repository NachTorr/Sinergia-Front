import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/types/UserData";
import { MessageData } from "@/types/MessageData";

interface UserState {
  userActive: UserData | null;
  userMessages: MessageData[];
}

const initialState: UserState = {
  userActive: null,
  userMessages: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserActive: (state, action: PayloadAction<UserData>) => {
      state.userActive = action.payload;
    },
    logoutUser: (state) => {
      state.userActive = null;
    },
    readMessageAction: (state, action) => {
      state.userMessages = state.userMessages.map((message) => {
        if (message.id == action.payload) {
          return { ...message, status: "READ" };
        }
        return message;
      });
    },
  },
});

export const { setUserActive, logoutUser, readMessageAction } =
  userSlice.actions;
export default userSlice.reducer;
