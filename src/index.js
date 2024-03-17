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
      { path: "postdetail", element: <PostDetail /> },
      { path: "search", element: <Search /> }
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
