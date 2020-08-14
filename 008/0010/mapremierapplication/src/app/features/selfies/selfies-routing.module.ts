import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { UnSelfieComponent } from './un-selfie/un-selfie.component';

const routes: Routes = [
  {
    path: 'selfies/consulter/:id', component: UnSelfieComponent
  },
  {
    path: 'selfies', component: SelfieListComponent
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
export class SelfiesRoutingModule { }
