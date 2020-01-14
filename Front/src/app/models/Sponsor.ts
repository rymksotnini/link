import {User} from "./User";

export class Sponsor {

    public id: number;
    public name: string;
    public activity: string;
    public city: string;
    public country: string;
    public slogan: string;
    public description: string;
    public image: string;
    public phone: string;
    public website: string;
    public user : User;
    constructor() {
    }
}