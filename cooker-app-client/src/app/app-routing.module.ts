import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/modules/home/home.component";
import {ReceipiesComponent} from "./components/modules/receipies/receipies.component";
import {ManageComponent} from "./components/modules/manage/manage.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'recipies',component: ReceipiesComponent},
  {path:'manage',component: ManageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
