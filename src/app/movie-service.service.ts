import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private baseUrl1 = 'http://localhost:8765';
  

  constructor(private http: HttpClient) { }

  public getMovies(title) {
  return this.http.get<Movie[]>(this.baseUrl1 + '/search-movies/searchs/' + title);
  }

  public getFavList() {
    return this.http.get<Movie[]>(this.baseUrl1 + '/favourite-movies/favourite');
  }

  public addfavMovie(movie) {
    return this.http.post(this.baseUrl1 + '/favourite-movies/favAdd/' + movie.movieId, movie.movieId);
  }
}
