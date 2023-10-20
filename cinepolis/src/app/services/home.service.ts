import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pelicula } from "../interfaces/schema";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {

  }
  peliculas: Pelicula[] = []
  urlBackendCreate = 'http://localhost:3000/peliculas/register'
  urlBackendGET = 'http://localhost:3000/peliculas/getallpelis'

  selectedPelicula: Pelicula = {
    name: "",
    year: 0,
    type: ""
  }

  createPelicula(pelicula: Pelicula) {
    return this.http.post(this.urlBackendCreate, pelicula).subscribe((res) => {
      console.log("res: ", res)
    }, (err) => {
      console.log("res: ", err)
    })
  }
  readPelicula() {
    return this.http.get<any>(this.urlBackendGET).subscribe((res) => {
      this.peliculas = res.data
    }, (err) => {
      console.log("res: ", err)
    })
  }
  updatePelicula() {
  }
  deletePelicula() {
  }
}
