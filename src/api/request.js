import Unsplash, { toJson } from "unsplash-js/native";

const unsplash = new Unsplash({
  applicationId:
    "a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa",
  secret: "4ea19af370997bcb0c580c071437661346b073b8e2f5252871e171ecc3c783ee"
});

export async function Photos() {
  const response = await unsplash.photos
    .listPhotos(1, 6, "latest")
    .then(toJson)
    .then(json => json)
    .catch(() => {
      Photos();
    });
  return response;
}
