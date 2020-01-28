import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CitiesService } from './services/cities'

import { AppComponent } from './app.component';
import { FichaComponent } from './components/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
