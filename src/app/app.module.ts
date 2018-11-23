import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchModelComponent } from './search-model/search-model.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { CardsComponent } from './cards/cards.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchModelComponent,
    SearchListComponent,
    FavListComponent,
    HomeComponent,
    FooterComponent,
    CardpageComponent,
    CardsComponent,
    FavouriteComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
