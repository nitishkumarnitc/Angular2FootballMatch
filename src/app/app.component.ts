import {Component, OnInit} from '@angular/core';
import {FootBallService} from "./foot-ball.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //private competitions:Competition[]=[];
  private errorMessage:string;


  constructor(private _footBallService:FootBallService,private _router:Router){

  }
  ngOnInit(){
    //
    // this._footBallService.getCompetitions()
    //   .subscribe(response=>{this.competetions=response;this.printToConsole()},error=>this.errorMessage=<any> error)
    this._router.navigate(['competitions']);

  }

}
