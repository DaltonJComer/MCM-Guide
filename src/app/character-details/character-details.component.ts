import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  
  results:any;
  heroName:string;

  constructor(private searcher: ConfigService) { 
  }

  ngOnInit(): void {}

  search(name: string){
    this.searcher.getDetails(name).subscribe(result => this.results = result);
  }

}
