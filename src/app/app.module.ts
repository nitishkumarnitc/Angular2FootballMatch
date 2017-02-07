import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FootBallService} from "./foot-ball.service";
import { CompetitionsComponent } from './competitions/competitions.component';
import {routes} from "./app.routes";
import { PaginationModule } from 'ng2-bootstrap';
import {Ng2TableModule} from "ng2-table";

// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
     Ng2TableModule,
    PaginationModule
  ],
  providers: [FootBallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
