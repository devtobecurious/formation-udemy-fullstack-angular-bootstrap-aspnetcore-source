import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';

import { SharedModule } from './../../shared/modules/shared/shared.module';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { UnSelfieComponent } from './un-selfie/un-selfie.component';



@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfieComponent,
    UnSelfieComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    WebcamModule,
    SelfiesRoutingModule
  ],
  exports: [
    SelfieListComponent 
  ]
})
export class SelfieModule { } 
