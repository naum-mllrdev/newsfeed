import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds-page',
  templateUrl: './feeds-page.component.html',
  styleUrls: ['../w3.css'],
})
export class FeedsPageComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit() {
    this.title = 'Today\'s Trending';
  }
}
