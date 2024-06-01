import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "./pages/channel/artist";
import HomePage from "./pages/home-page";
import ChannelAlbumsPage from "./pages/channel/albums";
import AlbumPage from "./pages/album";
import LibraryPage from "./pages/library-page";
import SearchResultsPage from "./pages/search-results-page";
import SearchPage from "./pages/search-page";
import ToastTestPage from "./pages/toast-test-page";
import Root from "./root";
import ErrorPage from "./pages/error-page";

const Index = () => <p>Index!</p>

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
        element: <AlbumPage />
      },
    ],
  },
  // {
  //   path: "/",
  //   // element: <HomePage />
  //   element: <SearchPage />
  // },
  // {
  //   path: "/search",
  //   element: <SearchResultsPage />
  // },
  // {
  //   path: "/library",
  //   element: <LibraryPage />
  // },
  // {
  //   path: "/artist/:id",
  //   element: <ArtistPage />
  // },
  // {
  //   path: "/artist/:id/albums",
  //   element: <ChannelAlbumsPage />
  // },
  // {
  //   path: "/album/:id",
  //   element: <AlbumPage />
  // },
  // {
  //   path: "/toast-test",
  //   element: <ToastTestPage />
  // },
]);
