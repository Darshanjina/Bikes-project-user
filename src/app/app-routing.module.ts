import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserarticlesComponent } from './userarticles/userarticles.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { SimilararticlesComponent } from './similararticles/similararticles.component';
import { DetailsarticlesComponent } from './detailsarticles/detailsarticles.component';


const routes: Routes = [
  {path:'',component:UserhomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'userarticles',component:UserarticlesComponent},
  {path:'userabout',component:UseraboutComponent},
  {path:'usercontact',component:UsercontactComponent},
  {path:'similararticles/:bikename',component:SimilararticlesComponent},
  {path:'detailsarticles/:bikename',component:DetailsarticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
