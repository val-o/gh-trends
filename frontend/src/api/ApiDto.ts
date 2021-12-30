export type Repository = {
  author: string;
  language: string;
  langcolor: string;
  stars: number;
  forks: number;
  laststars: number;
  builtby: DeveloperBasic[];
} & RepositoryBasic;

export type RepositoryBasic = {
  name: string;
  description: string;
  url: string;
};

export type Developer = {
  name: string;
  repository?: RepositoryBasic;
} & DeveloperBasic;

export type DeveloperBasic = {
  username: string;
  url: string;
  avatar: string;
};
