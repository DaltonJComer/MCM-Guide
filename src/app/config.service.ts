import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly URL = 'https://www.superheroapi.com/api.php/3548764205349576/search/';
  resp:string;
  constructor(private http: HttpClient) {}

  getDetails(search: string) {
    return this.http.get(this.URL + search);
  }
}

