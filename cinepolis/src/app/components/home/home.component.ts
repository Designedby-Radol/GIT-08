import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public homeservice: HomeService){}
  addPelicula(form: NgForm){
    this.homeservice.createPelicula(form.value)
  };
}
