import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryRepo } from 'src/app/country.repo';
import { City } from 'src/app/model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form!: FormGroup
  city?: City

  constructor(private fb: FormBuilder, private router: Router, private countryRepo: CountryRepo){ }

  ngOnInit(): void {

    this.form = this.searchCountries()
      
  }

  searchCountries(){
    return this.fb.group({
      country: this.fb.control<string>(''),
      city: this.fb.control<string>('')
    })
  }

  addCountry(){
    const country = this.form?.value["country"];
    const city = this.form?.value["city"];
    console.log(country)
    console.log(city)
    this.countryRepo.addCity(country);
    this.city = { country : country, city: city };
    this.countryRepo.addCity(this.city);
    this.router.navigate(['/'])
  }

}
