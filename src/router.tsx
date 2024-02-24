import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "./pages/channel/artist";
import HomePage from "./pages/home-page";
import ChannelAlbumsPage from "./pages/channel/albums";
import AlbumPage from "./pages/album";
import LibraryPage from "./pages/library-page";
import SearchPage from "./pages/search-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LibraryPage />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/artist/:id",
    element: <ArtistPage />
  },
  {
    path: "/artist/:id/albums",
    element: <ChannelAlbumsPage />
  },
  {
    path: "/album/:id",
    element: <AlbumPage />
  },
]);
