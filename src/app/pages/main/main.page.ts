import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public readonly mains: string[] = ['duong', 'huynh', 'kim', 'minh', 'hung', 'vinh', 'dai', 'duc'];
  constructor() { }

  ngOnInit() {
  }

}
