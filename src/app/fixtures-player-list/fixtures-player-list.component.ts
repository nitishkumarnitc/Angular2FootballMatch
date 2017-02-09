import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fixtures-player-list',
  templateUrl: './fixtures-player-list.component.html',
  styleUrls: ['./fixtures-player-list.component.css']
})
export class FixturesPlayerListComponent implements OnInit {
  id:number;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=+this.activatedRoute.snapshot.params['id'];
    console.log("Team id is :"+this.id);
  }

}
