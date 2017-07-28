import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryComponent} from '../category/category.component';

@Component({
  selector: 'app-order-meals',
  templateUrl: './order-meals.component.html',
  styleUrls: ['./order-meals.component.css']
})
export class OrderMealsComponent implements OnInit {
  @ViewChild(CategoryComponent) category: CategoryComponent;
  constructor() { }

  ngOnInit() {
    this.category.changeNameCategory('Đặt Cơm');
  }

}
