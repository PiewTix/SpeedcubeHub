import "reflect-metadata"
import { DataSource } from "typeorm"
import { Speler } from "./entity/Speler"
import {Toernooi} from "./entity/Toernooi";
import {Organisator} from "./entity/Organisator";
import {Wedstrijd} from "./entity/Wedstrijd";
import {Persoon} from "./entity/Persoon";
import {Statistiek} from "./entity/Statistiek";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "cube",
    password: "cube",
    database: "speedcube",
    synchronize: true,
    logging: false,
    entities: [Persoon, Toernooi, Organisator, Wedstrijd, Speler, Statistiek],
    migrations: [],
    subscribers: [],
})
