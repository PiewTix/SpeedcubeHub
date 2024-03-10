"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Speler_1 = require("./entity/Speler");
var Toernooi_1 = require("./entity/Toernooi");
var Organisator_1 = require("./entity/Organisator");
var Wedstrijd_1 = require("./entity/Wedstrijd");
var Persoon_1 = require("./entity/Persoon");
var Statistiek_1 = require("./entity/Statistiek");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "cube",
    password: "cube",
    database: "speedcube",
    synchronize: true,
    logging: false,
    entities: [Persoon_1.Persoon, Toernooi_1.Toernooi, Organisator_1.Organisator, Wedstrijd_1.Wedstrijd, Speler_1.Speler, Statistiek_1.Statistiek],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map