import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCityComponent } from './components/list-city/list-city.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path:'', component:ListCityComponent },
  { path:'add-city', component:SearchComponent},
  { path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
