

export class Movie {
  constructor(data) {
    this.title = data.Title;
    this.imdbId = data.imdbID;
    this.poster = data.Poster;
    this.description = data.Plot;
    this.date = data.Date;
    this.rating = data.Rating;
  }

  title: string;
  date: Date;
  imdbId: string;
  type: string;
  poster: string;
  description: string;
  rating: string;
}
