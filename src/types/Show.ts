export interface IShow {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  premiered: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: ICountry;
  };
  webChannel: {
    id: number;
    name: string;
    country: ICountry;
  } | null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previous: {
      href: string;
    };
    next: {
      href: string;
    };
    episodes: {
      href: string;
    };
    seasons: {
      href: string;
    };
    casts: {
      href: string;
    };
    reviews: {
      href: string;
    };
    similar: {
      href: string;
    };
    videos: {
      href: string;
    };
    recommendations: {
      href: string;
    };
    externalIds: {
      href: string;
    };
  };
}

interface ICountry {
  name: string;
  code: string;
  timezone: string;
}
