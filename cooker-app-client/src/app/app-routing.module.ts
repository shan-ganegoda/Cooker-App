import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/modules/home/home.component";
import {ReceipiesComponent} from "./components/modules/receipies/receipies.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'recipies',component: ReceipiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
