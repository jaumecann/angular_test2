import { Injectable } from '@angular/core'

@Injectable()

export class CitiesService {

  cities = [
    {
      name: 'barcelona',
      img: 'assets/img/barcelona.jpg'
    },
    {
      name: 'dubai',
      img: 'assets/img/dubai.jpg'
    },
    {
      name: 'kualalumpur',
      img: 'assets/img/kualalumpur.jpg'
    },
    {
      name: 'berlin',
      img: 'assets/img/berlin.jpg'
    },
    {
      name: 'newyork',
      img: 'assets/img/newyork.jpg'
    },
    {
      name: 'paris',
      img: 'assets/img/paris.jpg'
    },
    {
      name: 'prague',
      img: 'assets/img/prague.jpg'
    },
    {
      name: 'tokyo',
      img: 'assets/img/tokyo.jpg'
    },
    {
      name: 'toronto',
      img: 'assets/img/toronto.jpg'
    }
  ]

  constructor (){
    console.log('pillo el servicio')
  }

  getCity(){
    return this.cities
  }

}
