export async function getCharacters() {
  const { data } = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.NEXT_PUBLIC_APIKEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  return data;
}
