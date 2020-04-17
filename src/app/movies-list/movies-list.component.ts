import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movie } from "./model/movie";
import _ from "lodash";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  selFilter: string;

  constructor(moviesService: MoviesService) {
    moviesService.get().then(rsp => {
      this.movies = rsp;
    });
  }

  get dataProvider(): Movie[] {
    let sf = this.selFilter //not needed? 
    let filtered = _.chain(this.movies)
    .filter(e => {
      if (sf == 'modern'){
        // console.log('modern')
        return e.date.getFullYear() >= 2000
      } 
      else if (sf == 'older') {
        // console.log('older')
        return e.date.getFullYear() < 2000
      } 
      else {
        // console.log('no fil')
        return true;
      }
    })
    .sortBy('date')
    .reverse()
    .value();

    return filtered
  }

  ngOnInit() {
    // console.log("ngInit");
  }
}
