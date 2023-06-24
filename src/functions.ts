import { ISearchResult } from "./interfaces";
import { ICharacters } from "./interfaces";

export async function getCharacters(
  offset: number = 0
): Promise<ISearchResult> {
  const { data } = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.NEXT_PUBLIC_APIKEY}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  const searchResult: ISearchResult = {
    count: data.count,
    offset: data.offset,
    total: data.total,
    results: data.results.map((character: ICharacters) => ({
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension,
      },
    })),
  };

  console.log(searchResult);

  return searchResult;
}
