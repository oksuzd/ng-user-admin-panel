import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from "./core/core.module";
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';



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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
