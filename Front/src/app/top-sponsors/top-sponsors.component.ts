import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

class Sponsor {
  id: number;
  name : string;
  image : string;
  slogan : string;
  description: string;
}

@Component({
  selector: 'app-top-sponsors',
  templateUrl: './top-sponsors.component.html',
  styleUrls: ['./top-sponsors.component.css']
})
export class TopSponsorsComponent implements OnInit {
  slogan : string ;
  index : number;
  description : string;

  top_sponsors : Sponsor[] = [
      { id: 1,
        name: 'Amazon',
        image: './assets/img/sponsors/logo-sponsor-png-1.png',
        slogan: 'Work hard. Have fun. Make history.',
        description: 'It\'s meant to signify a company which is aspirational and enjoyable - but where the staff are still pulling their weight.'
      },
      { id: 2,
        name: '',
        image: './assets/img/sponsors/samsung-logo.jpg',
        slogan: 'Imagine',
        description: 'From one perspective, it simply means, "Imagine the amazing things we can build." That\'s a pretty strong message for a company that already makes everything from refrigerators to smartphones to TVs.'
      }
      ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationIndicators = false;
    this.slogan = this.top_sponsors[0].slogan;
    this.description = this.top_sponsors[0].description;
    this.index = 0 ;
  }

  ngOnInit() {
  }
  print(event :any)
  { this.index = this.index +1;
    this.slogan = this.top_sponsors[this.index%this.top_sponsors.length].slogan;
    this.description = this.top_sponsors[this.index%this.top_sponsors.length].description;
    console.log("current", event.current)
  }
}
