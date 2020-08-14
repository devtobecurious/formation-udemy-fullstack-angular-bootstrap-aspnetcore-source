import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SelfieModule } from './features/selfies/selfie.module';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelfieModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
