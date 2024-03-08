import "./App.css";
import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const octokit = new Octokit({
  auth: process.env.REACT_APP_CAT.replaceAll("?", ""),
});

function App() {
  const {
    isLoading,
    error,
    data: issues,
  } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      return await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "2coldok",
        repo: "blog",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
    },
  });
  

  return (
    <>
      {!isLoading && <Outlet context={issues.data} />}
      {!isLoading && <Navbar issues={issues.data} />}
    </>
  );
}

export default App;
