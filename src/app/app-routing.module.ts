import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';

const routes: Routes = [
  {
    path:"updates",
    component:UpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
