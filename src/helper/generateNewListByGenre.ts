import { IShow } from "@/types/Show";

export default function generateNewListByGenre(
  data: IShow[],
  genres: string[]
) {
  if (data.length === 0) {
    return;
  }
  if (genres.length === 0) {
    return;
  }
  const newArray = [];
  for (let i = 0; i < genres.length; i++) {
    const obj = {};
    for (let j = 0; j < data.length; j++) {
      obj[genres[i]] = data.filter((item) => {
        return item.genres.includes(genres[i]);
      });
    }
    newArray.push(obj);
  }
  return new Set(newArray);
}
