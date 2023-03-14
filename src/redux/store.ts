import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice';
import { emojiSlice } from "./addEmojiSlice";

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    emoji: emojiSlice.reducer
  }),
});

export default store;
