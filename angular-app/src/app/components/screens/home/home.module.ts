import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { FoodService } from 'src/app/services/food/food.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]/* ,
  providers: [
    FoodService
  ] */
})
export class HomeModule { }
