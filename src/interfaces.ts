interface IFilePath {
  path: string;
  extension: string;
}

export interface ICharacters {
  id: number;
  name: string;
  description: string;
  thumbnail: IFilePath;
}

export interface ISearchResult {
  count: number;
  offset: number;
  total: number;
  results: ICharacters[];
}
