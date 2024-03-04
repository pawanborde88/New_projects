import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './Hospital_Project/hospital/hospital.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';
import { TemplageComponent } from './templage/templage.component';
import { HomeComponent } from './Pages/home/home.component';
import { EventsComponent } from './Pages/events/events.component';
import { UpdatesComponent } from './Pages/updates/updates.component';
import { SingleeventComponent } from './Pages/events/singleevent/singleevent.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"updates",
    component:UpdatesComponent
  }
  ,{
    path:"Hospital",
    component:HospitalComponent
  }
  ,{
    path:"navbar",
    component:NavbarComponent
  },{
    path:"Events",
    component:EventsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'template',
    component:TemplageComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  { path: 'single-event/:slug', component:SingleeventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
