import {Routes, RouterModule} from "@angular/router";
import {CompetitionsComponent} from "./competitions/competitions.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by nitish on 7/2/17.
 */


export const router:Routes=[
  {path:'competitions', component:CompetitionsComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);
