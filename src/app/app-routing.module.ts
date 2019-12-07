import { NgModule } from '@angular/core';
//import the routing functionality
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
//routes tell angular which component to display based on url
//matches /hereos in url then displays heroes component
const routes:Routes = [
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id', component:HeroDetailComponent}
];
//init router metadata and start listening for location changes
//forRoot takes in the routes var this adds the RouterModule and inits it with the routes var
//export routermodule so it can be used in app
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
