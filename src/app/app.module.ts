import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import * as global from './global';
import { BrowserModule } from '@angular/platform-browser'
import {MatSidenavModule} from '@angular/material/sidenav';
import {GlobalModule} from './global/global.module';

import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
const globalServices = [
  global.HttpClient
];
@NgModule({
  imports: [
    GlobalModule,
    AppRoutingModule,
    HttpModule,
    MatSidenavModule,
    OverlayModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...globalServices
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
