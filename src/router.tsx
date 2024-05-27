import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "./pages/channel/artist";
import HomePage from "./pages/home-page";
import ChannelAlbumsPage from "./pages/channel/albums";
import AlbumPage from "./pages/album";
import LibraryPage from "./pages/library-page";
import SearchResultsPage from "./pages/search-results-page";
import SearchPage from "./pages/search-page";
import ToastTestPage from "./pages/toast-test-page";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />
    element: <LibraryPage />
    // element: <SearchPage />
  },
  {
    path: "/search",
    element: <SearchResultsPage />
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
  {
    path: "/toast-test",
    element: <ToastTestPage />
  },
]);
