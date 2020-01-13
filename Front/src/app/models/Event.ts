export class Event {

    public name: string;
    public startTime: Date;
    public endTime: Date;
    public place: string;
    public category : string;
    public  description : string ;
    constructor(name : string , startTime: Date , endTime: Date ,  place: string ,  category : string ,   description : string   )
    {
         this.name = name ;
         this.startTime = startTime;
        this.endTime = endTime ;
        this.place = place ;
        this.category = category
    }


}
