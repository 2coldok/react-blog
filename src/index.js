import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Home from "./pages/home/Home";
import Laboratory from "./pages/apptegory/laboratory/Laboratory";
import All from "./pages/apptegory/all/All";
import ReactList from "./pages/apptegory/react/ReactList";
import PostDetail from "./pages/post-detail/PostDetail";
import SearchList from "./components/search-list/SearchList";
import Search from "./pages/search/Search";
import Javascript from "./pages/apptegory/javascript/Javascript";
import Css from "./pages/apptegory/css/Css";
import Profile from "./pages/apptegory/profile/Profile";
import Next from "./pages/apptegory/next/Next";
import Typescript from "./pages/apptegory/typescript/Typescript";
import Youtube from "./pages/apptegory/youtube/Youtube";
import YoutubeDetail from "./pages/youtube-detail/YoutubeDetail";
import Pandora from "./pages/apptegory/pandora/Pandora";
import Three from "./pages/apptegory/three/Three";
import Jest from "./pages/apptegory/jest/Jest";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { index: true, element: <SearchList /> },
      { path: "all", element: <All /> },
      { path: "react", element: <ReactList /> },
      { path: "laboratory", element: <Laboratory /> },
      { path: "javascript", element: <Javascript /> },
      { path: "css", element: <Css /> },
      { path: "profile", element: <Profile /> },
      { path: "next", element: <Next /> },
      { path: "typescript", element: <Typescript /> },
      { path: "youtube", element: <Youtube /> },
      { path: "three", element: <Three /> },
      { path: "pandora", element: <Pandora /> },
      { path: "jest", element: <Jest /> },
      { path: "postdetail", element: <PostDetail /> },
      { path: "search", element: <Search /> },
      { path: "youtubedetail", element: <YoutubeDetail /> }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
