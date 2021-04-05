import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-binge-calculator',
  templateUrl: './binge-calculator.component.html',
  styleUrls: ['./binge-calculator.component.scss']
})
export class BingeCalculatorComponent implements OnInit {

  movies: object;
  bingeList: string[] = [];
  totalTime: number = 0;
  totalHours: number = 0;
  totalMinutes: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/movies.json").subscribe(data =>{
      this.movies = data["AllMovies"];
    })
  }

  updateTime(duration:number){
    this.totalTime+=duration;
    this.totalHours = Math.floor(this.totalTime/60);
    this.totalMinutes = this.totalTime-(this.totalHours*60);
  }

}
