import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-profile',
  templateUrl: './sponsor-profile.component.html',
  styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

  sponsor = { id: 1,
              name: 'Amazon',
              city: '',
              country: '',
              image: './assets/img/sponsors/logo-sponsor-png-1.png',
              slogan: 'Work hard. Have fun. Make history.',
              description: 'It\'s meant to signify a company which is aspirational and enjoyable - but where the staff are still pulling their weight.'
            };

  constructor() { }

  ngOnInit() {
  }

}
