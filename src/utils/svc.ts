import { IPinnedRepositories } from "./types";

export const fetchPinnedRepos = async (): Promise<IPinnedRepositories[]> => {
  const query = `{
      user(login: "${process.env.GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              openGraphImageUrl
              url
            }
          }
        }
      }
    }`;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Error fetching data:", error);
    return [];
  }

  const data = await response.json();
  const result = data.data.user.pinnedItems.nodes;
  return result as IPinnedRepositories[];
}