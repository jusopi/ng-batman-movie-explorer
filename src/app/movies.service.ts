import { Injectable } from "@angular/core";
import axios from "axios";
import { Movie } from "./model/movie";
import Chance from "chance";

const c = new Chance();

const apiUrl = "https://www.omdbapi.com/";
const apiKey = "74422f17";
const mock = "../assets/movies.json";
const ratings = ['G', 'PG', 'PG-13', 'R', 'UR']

@Injectable()
export class MoviesService {
  constructor() {
    console.log("movie service created");
  }

  get(filter?: object) {
    let url = `${apiUrl}?apikey=${apiKey}&s=batman`;

    return axios
      .get(url)
      .then(rsp => {
        let list: Movie[];

        try {
          list = rsp.data.Search.map(e => {
            e.Plot = c.paragraph(); // api call doesn't return Plot
            e.Date = c.date() //filling random date & month
            if (e.Year){
              e.Date.setYear(parseInt(e.Year))
            }
            e.Rating = c.pickone(ratings)

            return new Movie(e);
          });
        } catch (err) {
          console.warn(err);
        }

        console.log(list);
        return list;
      })
      .catch(err => console.warn(err));
  }
}
