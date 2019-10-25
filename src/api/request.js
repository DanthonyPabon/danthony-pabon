import Unsplash, { toJson } from "unsplash-js/native";

const unsplash = new Unsplash({
  accessKey: "48b6f17aca6c4b92689dc676201e4cb36a3561f61e26a818fd84b929049dc779",
  secret: "9dbd527e3cbb8d996e548f56e0d99dc93a85506386bbba17d162af0877dbaf65",
  headers: {
    "X-Custom-Header": "foo"
  }
});

export async function Photos() {
  const response = await unsplash.photos
    .listPhotos(1, 12, "latest")
    .then(toJson)
    .then(json => json)
    .catch(() => {
      Photos();
    });
  return response;
}
