import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input()pageSize!: number;
  @Input()totalCount!: number;
  @Output() pageChanged=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event:any){
    this.pageChanged.emit(event.page);
  }

}
