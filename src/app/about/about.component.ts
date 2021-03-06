import { Component, OnInit, INJECTOR, Inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(@Inject(NgbCarouselConfig) carousel: NgbCarouselConfig) {
    carousel.interval = 3000;
    carousel.keyboard = true;
    carousel.wrap = true;
    carousel.showNavigationArrows = true;
  }

  ngOnInit() {
  }

}