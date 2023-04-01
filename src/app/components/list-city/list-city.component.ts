import { Component, OnInit } from '@angular/core';
import { CountryRepo } from 'src/app/country.repo';
import { City } from 'src/app/model';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  city: City[] = []

  constructor(private countryRepo: CountryRepo){ }

  ngOnInit(): void {

    this.getAllCities()
      .then(result => {
        this.city = result
      })
      
  }

  getAllCities(): Promise<City[]>{
    return this.countryRepo.getAllCities()
  }

}
