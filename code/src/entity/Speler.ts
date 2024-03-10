import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm"
import {Persoon} from "./Persoon";
import {Wedstrijd} from "./Wedstrijd";
import {Statistiek} from "./Statistiek";

@Entity()
export class Speler extends Persoon{

    
    @OneToMany(() => Wedstrijd, (wedstrijd) => wedstrijd.speler1)
    wedstrijdenSpeler1 : Wedstrijd[]

    @OneToMany(() => Wedstrijd, (wedstrijd) => wedstrijd.speler2)
    wedstrijdenSpeler2 : Wedstrijd[]


}