import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
movies: Movie[];
movies1: Movie[];
movie2: Movie = new Movie();
flag = 0;
  constructor(private route: ActivatedRoute, private router: Router,
    private userService: MovieServiceService) { 
    }

  ngOnInit() {
    this.userService.getFavList()
    .subscribe(data => {
      this.movies = data;
    });
  }
  searchMovies(name: string) {
    this.userService.getMovies(name)
    .subscribe(data => {
      this.movies1 = data;
      this.flag = 1;
    });
  }

}
