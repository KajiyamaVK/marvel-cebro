import { ISearchResult } from "./interfaces";
import { ICharacters } from "./interfaces";
interface IGetCharacters {
  offset?: number;
  nameInput?: string;
  currentEndPoint?: string;
}

export async function getCharacters({
  offset,
  nameInput,
  currentEndPoint,
}: IGetCharacters = {}): Promise<ISearchResult> {
  const ts = new Date().getTime();
  let url: string;

  if (currentEndPoint === "") {
    url = nameInput
      ? `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${process.env.NEXT_PUBLIC_APIKEY}&offset=${offset}&nameStartsWith=%${nameInput}%`
      : `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${process.env.NEXT_PUBLIC_APIKEY}&offset=${offset}`;
  } else {
    url = `${currentEndPoint!.replace(/&offset=[^&]*/g, "")}&offset=${offset}`;
  }

  console.log("url", url);

  const { data } = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  const searchResult: ISearchResult = {
    endpoint: url,
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

  return searchResult;
}
