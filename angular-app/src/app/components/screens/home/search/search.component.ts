import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/* import { IFood } from 'src/app/services/food/food.interface'; */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

 /*  @Input() foods: IFood[] */
  @Output() findFoods = new EventEmitter<{ searchTerm: string

  }>();

  searchTerm = ''

  handleSearch(e:KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({searchTerm: this.searchTerm})
      /* this.foods = this.foods.filter(food => food.title.toLocaleLowerCase().includes(this.searchTerm.toLowerCase())) */
    }
  }
}
