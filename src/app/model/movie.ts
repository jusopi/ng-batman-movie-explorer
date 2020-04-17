export class Movie {
  constructor(data) {
    this.title = data.Title;
    this.imdbId = data.imdbID;
    this.poster = data.Poster;
    this.description = data.Plot;
    this.date = new Date(data.Released);
    this.rating = data.Rated;
    this.runtime = data.Runtime;
  }

  title: string;
  date: Date;
  imdbId: string;
  type: string;
  poster: string;
  description: string;
  rating: string;
  runtime: string;
}
