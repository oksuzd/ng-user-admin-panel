import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./core/pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./core/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'admin/users',
    loadChildren: () => import('./admin/users/users.module').then((m) => m.UsersModule),
  },
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
