import { Injectable } from '@angular/core';
import {Competition} from "./competition";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class FootBallService {

  private getCompetitionsUrl="https://www.api.football-data.org/v1/competitions/";

  constructor(private _http:Http) { }

  getCompetitions():Observable<Competition[]>{

    let headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    //

    return this._http.get(this.getCompetitionsUrl)
      .map((response:Response)=> <Competition[]> response.json())
      .do(data=>console.log(JSON.stringify(data)));
  }

}
