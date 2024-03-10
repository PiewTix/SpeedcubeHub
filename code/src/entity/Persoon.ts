import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Persoon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    voornaam: string

    @Column()
    achternaam: string

    @Column()
    geslacht: string

    @Column()
    land: string

}
