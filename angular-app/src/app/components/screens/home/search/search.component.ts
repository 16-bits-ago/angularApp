import { Component, Input, OnInit } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() foods: IFood[]

  searchTerm = ''

  handleSearch(e:KeyboardEvent) {
    if (e.key === 'Enter') {
      console.log('Enter Works')
      this.foods = this.foods.filter(food => 
        food.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      console.log(this.foods)
    }
  }
}
