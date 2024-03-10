import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm"
import {Persoon} from "./Persoon";
import {Wedstrijd} from "./Wedstrijd";
import {Speler} from "./Speler";

@Entity()
export class Statistiek{


    @PrimaryGeneratedColumn()
    spelerId: number

    @Column()
    GewonnenWedstrijden: number

    @Column()
    GewonnenToernooien: number

    @Column('decimal', {precision: 3, scale: 1})
    recordTijd: number

    @OneToOne(() => Speler)
    @JoinColumn()
    speler: Promise<Speler>

}