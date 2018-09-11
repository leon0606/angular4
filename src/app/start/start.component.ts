import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input()
  private rating:number = 0;

  private starts : boolean[];

  constructor() { }

  ngOnInit() {
    this.starts = [];
    for(let i = 1; i<=5; i++ ){
        this.starts.push(i>this.rating);
    }
  }

}
