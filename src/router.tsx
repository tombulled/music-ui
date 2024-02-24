import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "./pages/channel/artist";
import HomePage from "./pages/home-page";
import ChannelAlbumsPage from "./pages/channel/albums";
import AlbumPage from "./pages/album";
import LibraryPage from "./pages/library-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/library",
    element: <LibraryPage />
  },
  {
    path: "/channel/:channelId",
    element: <ArtistPage />
  },
  {
    path: "/channel/:channelId/albums",
    element: <ChannelAlbumsPage />
  },
  {
    path: "/album/:albumId",
    element: <AlbumPage />
  },
]);
