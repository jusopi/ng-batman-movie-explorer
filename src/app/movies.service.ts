import { Injectable } from "@angular/core";
import axios from "axios";
import { Movie } from "./model/movie";
import Chance from "chance";

const c = new Chance();

const apiUrl = "https://www.omdbapi.com/";
const apiKey = "74422f17";
const ratings = ["G", "PG", "PG-13", "R", "UR"];

@Injectable()
export class MoviesService {
  constructor() {
    console.log("movie service created");
  }

  get(filter?: object) {
    let url = `${apiUrl}?apikey=${apiKey}&s=batman`;

    return axios.get(url)
      .then(rsp => rsp.data.Search.map(e => e.imdbID))
      .then(rsp => {
        let rqsts = rsp.map(id => axios.get(`${apiUrl}?apikey=${apiKey}&i=${id}&plot=full`))
        // console.log(rqsts)

        return axios.all(rqsts)
          .then(
            axios.spread((...rsps) => {
              console.log(rsps)
              return rsps.map(e => new Movie(e.data))
            })
          )
      })
  }
}
