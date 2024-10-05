import { useEffect, useState } from "react";
import { fetchPinnedRepos } from "./utils/svc";
import { IPinnedRepositories } from "./utils/types";
import { ProjectCard } from "./components/projectCard";
import { ContactBanner } from "./components/contactBanner";

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
    <div className="p-2">
      <div className="text-2xl sticky top-2 rounded border-2 shadow-[4px_4px_0px_0px_black] border-black font-bold bg-white p-3 flex justify-between items-center">
        <span>GK</span>
        <ContactBanner />
      </div>
      <div className="m-auto my-4 grid xl:grid-cols-4 md:grid-cols-2 gap-10 justify-evenly">
        {data?.map((repository) => (
          <ProjectCard key={repository.name} repository={repository} />
        ))}
      </div>
    </div>
  );
}

export default App;
