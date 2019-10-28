import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked up red color</div>
    <div *ngSwitchCase="'blue'">You picked up blue color</div>
    <div *ngSwitchCase="'green'">You picked up green color</div>
    <div *ngSwitchDefault>Pick Again</div>
    

  </div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public color="green";

  constructor() { }

  ngOnInit() {
  }

}
