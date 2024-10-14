export interface IPinnedRepositories {
    name: string,
    description: string,
    url: string,
    openGraphImageUrl: string;
}

export interface IContactList {
    label: string;
    url: string
};

export interface ISiteData {
    documentTitle: string,
    navbarTitle: string,
    navbarLinks: IContactList[],
    githubPinnedProjectsUrl: string
}