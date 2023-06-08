import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from './components/header/login/login.component';
import { MenuButtonComponent } from './components/header/menu-button/menu-button.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    MenuButtonComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
