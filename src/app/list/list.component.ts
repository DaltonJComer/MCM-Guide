import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { allowedNodeEnvironmentFlags } from 'process';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  search: string;
  categories: object = [{id: 0, title: "All"},{id: 1, title: "MCU"},
                        {id: 2, title: "X-Men"},{id: 3, title: "Other"}]
  MCU: boolean = true;
  XMen: boolean = true;
  Other: boolean = true;
  category: string = "All";
  movies: object;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/movies.json").subscribe(data =>{
      this.movies = data["AllMovies"];
    })
  }

}
