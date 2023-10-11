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
  urlBackend = 'http://localhost:3000/peliculas/register'
  
  selectedPelicula: Pelicula = {
    name: "",
    year: 0,
    type: ""
  }

  createPelicula(pelicula: Pelicula){
  }
  readPelicula (){
  }
  updatePelicula(){
  }
  deletePelicula (){
  }
}
