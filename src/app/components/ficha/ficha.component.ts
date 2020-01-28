
import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  cities = [];

  constructor( private _cityservice:CitiesService) { }

  //why it doesn't work without private

  ngOnInit() {
    this.cities= this._cityservice.getCity()
  }









}
