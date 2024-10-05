import { IPinnedRepositories } from "../utils/types";

export const ProjectCard = (props: { repository: IPinnedRepositories }) => {
  const { repository } = props;
  return (
    <div className="border-2 border-red">
      <a href={repository.url} target="_blank">
        <div className="border-2 h-full border-black p-5 rounded shadow-[4px_4px_0px_0px_black] hover:shadow-none transition-all">
          <h3 className="text-xl font-bold">{repository.name}</h3>
          <h3 className="line-clamp-4 my-4">{repository.description}</h3>
          <img className="rounded my-4" src={repository.openGraphImageUrl} />
        </div>
      </a>
    </div>
  );
};
