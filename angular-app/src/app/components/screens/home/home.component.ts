import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: IFood[] = []
  filteredFoods: IFood[] = []

  constructor(private foodservice: FoodService) { }

  ngOnInit(){
    this.foodservice.getAll().subscribe(data => {
      this.foods = data
      this.filteredFoods = data
    })
  }

  onSearch(eventData: { searchTerm: string }){
    this.filteredFoods = this.foods.filter(food => food.title.toLocaleLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }

  onFilter(eventData: { type: string }){
    this.filteredFoods = this.foods.filter(food => food.type === eventData.type)
  }

}
