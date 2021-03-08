import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watch-lists',
  templateUrl: './watch-lists.component.html',
  styleUrls: ['./watch-lists.component.scss']
})
export class WatchListsComponent implements OnInit {

  public watchlist: object;
  category: string;
  orders: object = [
    {category: "MCU", order:"Chronological"},
    {category: "X-Men", order:"Chronological (with timeline)"},
    {category: "X-Men", order:"Chronological (without timeline)"},
  ]
  viewOrder: string;
  movies: object;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/movies.json").subscribe(data =>{
      console.log(data);
      this.movies = data;
    })
  }

  setWatchlist(order){

    if(order=="release"){
      this.viewOrder = 'Release';
      if(this.category=="MCU"){
        this.watchlist=this.movies["MarvelRelease"];
      }
      else{
        this.watchlist = this.movies["X-MenRelease"];
      }
      
    }
    else if(order=="MC"){
      this.viewOrder = 'Chronological';
      this.watchlist = this.movies["MarvelChronological"];
      return;
    }
    else if(order=="X"){
      this.viewOrder = 'Chronological without timeline';
      this.watchlist = this.movies["X-MenChronologicalTL"];
      return;
    }
    else if(order=="XT"){
      this.viewOrder = 'Chronological with timeline';
      this.watchlist = this.movies["X-MenChronological"];
      return;
    }
    else{
      this.watchlist = null;
    }
  }

}
