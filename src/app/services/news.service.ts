import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( public http:HttpClient ) {}

  getNews(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin');
  }

}
