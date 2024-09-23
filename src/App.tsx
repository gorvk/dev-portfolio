import { useEffect, useState } from "react";
import "./App.css";
import { fetchPinnedRepos } from "./utils/svc";
import { IPinnedRepositories } from "./utils/types";
import { ProjectCard } from "./components/projectCard";

function App() {
  const [data, setData] = useState<IPinnedRepositories[]>([]);

  const getPinnedRepos = async () => {
    const data = await fetchPinnedRepos();
    setData(data);
  };

  useEffect(() => {
    getPinnedRepos();
  }, []);

  return (
    <>
      {data?.map((repository) => (
        <ProjectCard key={repository.name} repository={repository} />
      ))}
    </>
  );
}

export default App;
