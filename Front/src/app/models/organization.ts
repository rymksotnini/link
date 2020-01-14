import {User} from "./User";

export class Organization {
    public id: number;
    public name: string;
    public matricule: string;
    public activity: string;
    public followers: string;
    public sponsors: string;
    public events: string;
    public description: string;
    public slogan: string;
    public image: string;
    public city: string;
    public country: string;
    public user: User;
}