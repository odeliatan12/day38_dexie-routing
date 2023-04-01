import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryRepo } from './country.repo';
import { ListCityComponent } from './components/list-city/list-city.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CountryRepo ],
  bootstrap: [AppComponent]
})
export class AppModule { }
