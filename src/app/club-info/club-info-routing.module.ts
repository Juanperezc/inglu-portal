import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'

// Routes
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about',
        component: AboutComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubInfoRoutingModule { }
