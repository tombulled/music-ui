import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Album } from "../types";

interface LibraryState {
  albums: Album[];
}

const initialState: LibraryState = {
  albums: [],
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addAlbum: (state, action: PayloadAction<Album>) => {
      state.albums.push(action.payload);
    },
  },
});

export const { addAlbum } = librarySlice.actions;

export const selectLibraryAlbums = (state: RootState) => state.library.albums;

export default librarySlice.reducer;
