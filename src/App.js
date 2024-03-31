import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { SmartPortalProvider } from "./context/SmartPortal";
import { BlurProvider } from "./context/Blur";
import React from "react";
import "./App.css";

const octokit = new Octokit({
  auth: process.env.REACT_APP_CAT.replaceAll("?", ""),
});

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, { children: prev }),
    children
  );

export default function App() {
  const {
    isLoading,
    error,
    data: issues,
  } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      return await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "2coldok",
        repo: "react-blog",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="container">
      <AppProvider contexts={[SmartPortalProvider, BlurProvider]}>
        {error && <p>API ERROR!</p>}
        {!isLoading && <Outlet context={issues.data} />}
        {!isLoading && <Navbar issues={issues.data} />}
      </AppProvider>
    </div>
  );
}

// export default App;
