import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { Speler } from "./Speler"
import {Toernooi} from "./Toernooi";

@Entity()
export class Wedstrijd {

    @PrimaryGeneratedColumn()
    wedstrijdId: number

    @Column('decimal', {precision: 3, scale: 1})
    tijd1: number

    @Column('decimal', {precision: 3, scale: 1})
    tijd2: number

    @Column()
    ronde:string

    @ManyToOne(() => Speler, (speler) => speler.wedstrijdenSpeler1)
    speler1: Speler

    @ManyToOne(() => Speler, (speler) => speler.wedstrijdenSpeler2)
    speler2: Speler

    @ManyToOne(() => Toernooi, (toernooi) => toernooi.wedstrijden)
    toernooi: Toernooi




}