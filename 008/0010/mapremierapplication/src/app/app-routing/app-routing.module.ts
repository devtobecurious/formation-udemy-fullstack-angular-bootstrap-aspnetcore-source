import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from '../features/selfies/selfie-list/selfie-list.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/selfies'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
