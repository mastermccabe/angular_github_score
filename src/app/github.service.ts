import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class GithubService {
//from solutions below
  constructor(private _http: Http) { }
  retrieveGithubUser(username) {
   if (username) {
     return this._http.get(`https://api.github.com/users/${username}`)
     .map( data => data.json() )
     .toPromise();
   }
 }

}
