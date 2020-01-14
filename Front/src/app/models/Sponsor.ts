import {User} from "./User";

export class Sponsor {

    public id: number;
    public name: string;
    public activity: string;
    public city: string;
    public country: string;
    public slogan: string;
    public description: string;
    public image: any;
    public phone: string;
    public website: string;
    public user : User;
    constructor() {
    }
}