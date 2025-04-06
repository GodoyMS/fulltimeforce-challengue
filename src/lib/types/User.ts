import { RelationShipEnum } from "./Relationship";

export interface IUser{
    id:string;
    name:string;
    age:number;
    location:string;
    relationships:RelationShipEnum;
    image:string;
    features?:string[];
    interests:string[]
}