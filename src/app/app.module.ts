import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MoviesService } from "./movies.service";

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: MoviesListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MovieDetailComponent,
    MoviesListComponent
  ],
  bootstrap: [AppComponent],
  providers: [MoviesService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
