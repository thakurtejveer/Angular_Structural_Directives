import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div *ngFor="let x of colors; index as i; first as f;last as l; even as e; odd as o">
  
  <h2>{{f}} {{e}} {{o}} {{i}} {{x}} {{l}}</h2>
  </div>


  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public colors=["green", "red", "blue", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
