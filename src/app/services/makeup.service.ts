import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {

  constructor(public http:HttpClient) { }
  getMakeup(){
    return this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit');
  }
}
