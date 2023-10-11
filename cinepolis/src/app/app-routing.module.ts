import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BottomComponent } from './components/estrcutura/bottom/bottom.component';
import { TopComponent } from './components/estrcutura/top/top.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"",component: TopComponent},
  {path:"",component: BottomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
