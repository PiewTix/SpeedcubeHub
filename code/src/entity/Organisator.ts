import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm"
import {Persoon} from "./Persoon";
import {Toernooi} from "./Toernooi";

@Entity()
export class Organisator extends Persoon{

    @Column()
    email: string





}