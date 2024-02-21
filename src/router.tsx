import { createBrowserRouter } from "react-router-dom";
import ChannelPage from "./pages/channel/channel";
import HomePage from "./pages/home-page";
import ChannelAlbumsPage from "./pages/channel/albums";
import AlbumPage from "./pages/album";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/channel/:channelId",
    element: <ChannelPage />
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
