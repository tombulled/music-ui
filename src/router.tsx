import { createBrowserRouter } from "react-router-dom";
import AlbumPage from "./pages/album";
import ChannelAlbumsPage from "./pages/channel/albums";
import ArtistPage from "./pages/channel/artist";
import ErrorPage from "./pages/error-page";
import LibraryPage from "./pages/library-page";
import SearchPage from "./pages/search-page";
import SearchResultsPage from "./pages/search-results-page";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "search",
        element: <SearchResultsPage />,
      },
      {
        path: "album/:id",
        element: <AlbumPage />,
      },
      {
        path: "artist/:id",
        element: <ArtistPage />,
      },
      {
        path: "/artist/:id/albums",
        element: <ChannelAlbumsPage />,
      },
    ],
  },
]);
