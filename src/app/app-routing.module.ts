import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './fav-list/fav-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'search-list', component: SearchListComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
