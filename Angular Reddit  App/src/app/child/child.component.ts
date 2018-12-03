import { Component, OnInit , Input} from '@angular/core';
import {Article} from '../child/article.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() parentData : Article;
    
    

  constructor() {
   console.log(this.parentData);
  }

  voteUp(){
   
  }

  voteDown(){
    
  }

  ngOnInit() {
  }




}
