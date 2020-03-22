import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, RankingComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
