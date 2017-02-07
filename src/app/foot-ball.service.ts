import { Injectable } from '@angular/core';
import {Competition} from "./competition";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class FootBallService {

  private getCompetitionsUrl="http://www.api.football-data.org/v1/competitions/";

  constructor(private _http:Http) { }

  getCompetitions():Observable<Competition[]>{

 
    let headers = new Headers({ 'Accept': 'application/json' });
    let token = 'b705e8d107bc46c3990ba4fbf4f0f345';
    headers.append('X-Auth-Token', token);
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.getCompetitionsUrl, options)
      .map((response:Response)=> <Competition[]> response.json())
      .do(data=>console.log(JSON.stringify(data)));
  }

}
