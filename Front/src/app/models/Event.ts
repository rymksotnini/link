import {Sponsor} from "./Sponsor";

export class Event {
    public  id : number = 0 ;
    public name: string;
    public startTime: Date;
    public endTime: Date;
    public place: string;
    public category : string;
    public  description : string ;
    public image : any;
    public sponsoringFile : string ;
    public budget : number ;
    public  fundings : number ;
    public sponsors : Sponsor [] ;

    constructor(id : number  = 0 , name : string , startTime: Date , endTime: Date ,  place: string ,  category : string ,   description : string , image : any , sponsoringFile : string  , budget : number ,  fundings : number )
    {
        this.id = id ;
        this.name = name ;
        this.startTime = startTime;
        this.endTime = endTime ;
        this.place = place ;
        this.category = category;
        this.description=description;
        this.image = image;
        this.sponsoringFile = sponsoringFile;
        this.budget = budget ;
        this.fundings = fundings;

    }



}
