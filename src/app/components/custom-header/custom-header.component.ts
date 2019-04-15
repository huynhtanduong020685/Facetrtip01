import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  text: string;

  constructor() {
    console.log('Hello CustomHeaderComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {}

}
