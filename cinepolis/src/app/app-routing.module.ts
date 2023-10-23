import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BottomComponent } from './components/estrcutura/bottom/bottom.component';
import { TopComponent } from './components/estrcutura/top/top.component';
import { AddpelisComponent } from './components/addpelis/addpelis.component'
import { SeePelisComponent} from './components/see-pelis/see-pelis.component'
import { RecomendationsComponent } from './components/recomendations/recomendations.component'

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"",component: TopComponent},
  {path:"",component: BottomComponent},
  {path:"addpelis",component: AddpelisComponent},
  {path:"seepelis",component: SeePelisComponent},
  {path:"recomendations",component: RecomendationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
