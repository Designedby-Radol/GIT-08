import { Component } from '@angular/core';
import { HomeService } from "../../services/home.service";
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-addpelis',
  templateUrl: './addpelis.component.html',
  styleUrls: ['./addpelis.component.css']
})
export class AddpelisComponent {
    constructor(public homeservice: HomeService){}
    addPelicula(form: NgForm){
      this.homeservice.createPelicula(form.value)
    };
}
