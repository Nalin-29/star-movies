import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {
  movies : Movie[];
  constructor(private movieService:MovieServiceService) { }

  ngOnInit() {
    this.movieService.getFavList().subscribe(data=>
      {
        this.movies = data;
      });
  };


  
}
