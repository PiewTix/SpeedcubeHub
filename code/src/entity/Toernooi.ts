import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinColumn,
    PrimaryColumn, JoinTable
} from "typeorm"
import {Organisator} from "./Organisator";
import {Wedstrijd} from "./Wedstrijd";
import {constants} from "os";



@Entity()
export class Toernooi {

    @PrimaryColumn()
    naam: string

    @Column({ type: 'date' })
    datum: Date

    @Column()
    deelnamePrijs: number

    @Column()
    stad:string

    @Column()
    land: string

    @ManyToMany(() => Organisator, {cascade : true})
    @JoinTable()
    organisatoren: Organisator[]

    @OneToMany(() => Wedstrijd, (wedstrijd) => wedstrijd.toernooi)
    wedstrijden: Wedstrijd[]
}