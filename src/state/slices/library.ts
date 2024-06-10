import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Album } from "../../types";
import { ALBUM_3 } from "../../test-data";

interface LibraryState {
  albums: Album[];
}

const initialState: LibraryState = {
  // albums: [],
  albums: [ALBUM_3],
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
