import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  movie2: Movie = new Movie();
  flag = 0;
  constructor(config: NgbCarouselConfig, private route: ActivatedRoute, private router: Router,
    private userService: MovieServiceService) {

    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  ngOnInit() {
  }
  searchMovies(name: string) {
    this.userService.getMovies(name)
    .subscribe(data => {
      this.movies = data;
      this.flag = 1;
    });
  }
}
