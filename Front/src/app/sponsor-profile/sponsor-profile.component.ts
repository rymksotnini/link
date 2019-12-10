import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sponsor-profile',
    templateUrl: './sponsor-profile.component.html',
    styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

    sponsor = {
        id: 1,
        name: 'Amazon',
        city: '',
        country: '',
        image: './assets/img/sponsors/logo-sponsor-png-1.png',
        slogan: 'Work hard. Have fun. Make history.',
        description: 'It\'s meant to signify a company which is aspirational and enjoyable - but where the staff are still pulling their weight.'
    };

    itemsPerPage: number;
    totalItems: number;
    page: any;
    previousPage: any;
    elements: any[];
    cards: any [];

    constructor() {
        this.itemsPerPage = 3;
        this.page = 1;
        this.cards = [

            {
                title: 'Sing With Me',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://www.festivalsherpa.com/wp-content/uploads/2015/07/tland-cover-750x400.jpg'
            },
            {
                title: "let's CAMP",
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: "It's all about hope",
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://www.searcylaw.com/wp-content/uploads/2017/06/Breast-Cancer-Awareness.jpg'
            },
            {
                title: 'Card Title 5',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 6',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 7',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 8',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 9',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 9',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                title: 'Card Title 9',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
        ];
        this.elements = this.cards.slice(0, 3)
        this.totalItems = (this.cards.length / 3) * 10
    }

    ngOnInit() {
    }

    loadPage(page: number) {
        console.log("page is " , page)
        this.elements = this.cards.slice((page-1)*3,(page-1)*3+3)
        if (page !== this.previousPage) {
            this.previousPage = page;
            //this.loadData();
        }
    }
}
