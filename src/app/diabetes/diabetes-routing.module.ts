import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
const routes: Routes = [
  {
    path: '',
    children: [
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiabetesRoutingModule { }