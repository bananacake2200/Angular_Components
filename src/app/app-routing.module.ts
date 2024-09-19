import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';

const routes: Routes = [ 

  {path: "", component: LandingpageComponent},
  {path: "displayhelloworld", component: DisplayhelloworldComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
