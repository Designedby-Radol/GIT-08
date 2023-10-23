import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopComponent } from './components/estrcutura/top/top.component';
import { BottomComponent } from './components/estrcutura/bottom/bottom.component';
import { AddpelisComponent } from './components/addpelis/addpelis.component';
import { SeePelisComponent } from './components/see-pelis/see-pelis.component';
import { RecomendationsComponent } from './components/recomendations/recomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    BottomComponent,
    AddpelisComponent,
    SeePelisComponent,
    RecomendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
