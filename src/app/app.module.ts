import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from "./core/core.module";
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
