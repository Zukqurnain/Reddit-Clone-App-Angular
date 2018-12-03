import { Component, OnInit } from '@angular/core';
import {Article} from '../child/article.model';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }

  articles:Article[]

  getData(title , link) {
    this.articles.push(new Article(title , link));
  }
}
