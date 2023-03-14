import { createSlice } from '@reduxjs/toolkit';
const someData = ["&#128512;", "&#128525;", "&#128527;", "&#128516;", "&#128151;",
  "&#128507;", "&#128508;", "&#128509;", "&#128510;", "&#128511;","&#128517;"];

export const emojiSlice = createSlice({
  name: 'givedata',
  initialState: {
    emoji: "&#128512;",
  },
  reducers: {
    giveEmoji(state) {
      const value = Math.floor(Math.random() * 11);
      state.emoji = someData[value];
    },
  },
});

export const { giveEmoji } = emojiSlice.actions;
