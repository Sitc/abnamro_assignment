import { IShow } from "@/types/Show";

export default function extractGenres(data: IShow[]) {
  if (data.length === 0) {
    return;
  }
  const newArray = data
    .map((item: IShow) => item.genres)
    .reduce((acc: any, curr: any) => {
      return acc.concat(curr);
    });
  return [...new Set(newArray)];
}
