import { IPinnedRepositories } from "../utils/types";

export const ProjectCard = (props: { repository: IPinnedRepositories }) => {
  const { repository } = props;
  return (
    <div className="m-2 sm:w-80">
      <a href={repository.url} target="_blank">
        <div className="border-2 border-black p-5 rounded shadow-[4px_4px_0px_0px_black] hover:shadow-none transition-all">
          <h3 className="text-2xl font-bold">{repository.name}</h3>
          <h3 className="line-clamp-4 my-4">{repository.description}</h3>
          <img className="rounded my-4" src={repository.openGraphImageUrl} />
        </div>
      </a>
    </div>
  );
};
