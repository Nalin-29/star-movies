import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isEmptyFlag = 0;
  @Input() myMovies: Movie[];
  constructor(private route: ActivatedRoute, private router: Router,
    private userService: MovieServiceService) {
  }

  ngOnInit() {
  }
  public addToFav(movie) {
    this.userService.addfavMovie(movie)
    .subscribe(data => {
        console.log('Added');
    });
  }
  public noResult(){
    if(this.myMovies.length==0){
      this.isEmptyFlag = 1;
    }
  }
}
