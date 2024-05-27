import { AlbumType } from "./enums";

export type Image = {
  url: string;
  width: number | null;
  height: number | null;
};

export type ShortArtist = {
  id: string | null;
  name: string;
};

export interface Artist {
  id: string;
  name: string;
  avatar: Image | null;
  description: string | null;
}

export type ShortAlbum = {
  id: string | null;
  name: string;
};

export type Album = {
  id: string;
  name: string;
  year: number;
  artists: ShortArtist[];
  type: AlbumType;
  artwork: Image[];
};
