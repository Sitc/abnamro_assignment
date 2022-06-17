import extractGenres from "@/helper/extractGenres";
import generateNewListByGenre from "@/helper/generateNewListByGenre";
import { IShow } from "@/types/Show";

const data = [
  {
    name: "Show 1",
    image: { medium: "Show 1" },
    genres: ["Genre 1", "Genre 2"],
  },
  {
    name: "Show 2",
    image: { medium: "Show 2" },
    genres: ["Genre 3", "Genre 2"],
  },
  {
    name: "Show 3",
    image: { medium: "Show 3" },
    genres: ["Genre 4", "Genre 5"],
  },
];

describe("extractGenres", () => {
  test("returns an array of genres", () => {
    const result = extractGenres(data as IShow[]);
    expect(result).toEqual([
      "Genre 1",
      "Genre 2",
      "Genre 3",
      "Genre 4",
      "Genre 5",
    ]);
  });
});

describe("generateNewListByGenre", () => {
  test("returns new array grouped by genre", () => {
    const genres = ["Genre 1", "Genre 2"];
    const result = generateNewListByGenre(data as IShow[], genres);
    expect(result).toEqual(
      new Set([
        {
          "Genre 1": [
            {
              genres: ["Genre 1", "Genre 2"],
              image: { medium: "Show 1" },
              name: "Show 1",
            },
          ],
        },
        {
          "Genre 2": [
            {
              genres: ["Genre 1", "Genre 2"],
              image: { medium: "Show 1" },
              name: "Show 1",
            },
            {
              genres: ["Genre 3", "Genre 2"],
              image: { medium: "Show 2" },
              name: "Show 2",
            },
          ],
        },
      ])
    );
  });
});
