import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
];


  constructor() { }

  ngOnInit(): void {
  }

}
