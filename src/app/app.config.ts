import {ApplicationConfig, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {NgxCaptureModule} from 'ngx-capture';
import {WebcamModule} from 'ngx-webcam';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCaptureModule,
    WebcamModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()],
};

/*import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
*/
