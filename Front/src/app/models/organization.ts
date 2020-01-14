import {User} from "./User";

export class Organization {
    public id: number;
    public name: string;
    public matricule: string;
    public activity: string;
    public user: User;
}