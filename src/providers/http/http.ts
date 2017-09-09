import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

/*function to get the api*/
getCategory() {
	return this.http.get("https://mysterious-beach-83937.herokuapp.com/categories")
	.map(res => res.json())
}


getCoach() {
	return this.http.get("https://swapi.co/api/people" ) //https://mysterious-beach-83937.herokuapp.com/coaches")
	.map(res => res.json())
}
}
