import {Component, OnInit} from '@angular/core';
import {FootBallService} from "./foot-ball.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  //private competitions:Competition[]=[];
  private errorMessage:string;

  constructor(private _footBallService:FootBallService){

  }
  ngOnInit(){
    //
    // this._footBallService.getCompetitions()
    //   .subscribe(response=>{this.competetions=response;this.printToConsole()},error=>this.errorMessage=<any> error)

  }
  printToConsole(){
    //console.log("Inside componnet : "+ JSON.stringify(this.competitions));
  }

}
