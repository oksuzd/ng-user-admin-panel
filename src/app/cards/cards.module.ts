import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  {path: '', component: CardsComponent},
];

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CardsModule { }
