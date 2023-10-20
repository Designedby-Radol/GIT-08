import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HomeService } from "../../services/home.service";
@Component({
  selector: 'app-see-pelis',
  templateUrl: './see-pelis.component.html',
  styleUrls: ['./see-pelis.component.css']
})
export class SeePelisComponent {

  ngOnInit(): void{
    this.getAllPeliculas()
  }

  constructor(public homeservice: HomeService){}

  getAllPeliculas(){
    this.homeservice.readPelicula()
  }
}
