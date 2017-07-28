import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryHeaderComponent} from "./category-header/category-header.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() viewQuick: string ;
  // nameCategory: string;
  @ViewChild(CategoryHeaderComponent) cateHeader: CategoryHeaderComponent;
  constructor() {
    this.viewQuick = 'none';
  }
  changeNameCategory(name: string) {
    this.cateHeader.nameCategory = name;
  }
  ngOnInit() {
  }
  openViewQuick() {
    this.viewQuick = 'block';
  }
  closeViewQuick() {
    this.viewQuick = 'done';
  }
}
