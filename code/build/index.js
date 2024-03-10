"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("./data-source");
var Persoon_1 = require("./entity/Persoon");
var Speler_1 = require("./entity/Speler");
var Toernooi_1 = require("./entity/Toernooi");
var Organisator_1 = require("./entity/Organisator");
var Wedstrijd_1 = require("./entity/Wedstrijd");
var Statistiek_1 = require("./entity/Statistiek");
var StatistiekDAO_1 = require("./dao/StatistiekDAO");
var spelers = [
    { 'voornaam': 'Amir', 'acthernaam': 'Mechqouq', 'land': 'België', 'geslacht': 'man' },
    { 'voornaam': 'Sanjog', 'acthernaam': 'Singh', 'land': 'België', 'geslacht': 'man' },
    { 'voornaam': 'Xiu', 'acthernaam': 'Dojing', 'land': 'China', 'geslacht': 'man' },
    { 'voornaam': 'Stijn', 'acthernaam': 'Van Gouberghen', 'land': 'België', 'geslacht': 'X' },
    { 'voornaam': 'Laura', 'acthernaam': 'Vanderbilt', 'land': 'Verenigde Staten', 'geslacht': 'woman' },
    { 'voornaam': 'Javier', 'acthernaam': 'Hernandez', 'land': 'Spanje', 'geslacht': 'man' },
    { 'voornaam': 'Mia', 'acthernaam': 'Johnson', 'land': 'Verenigde Staten', 'geslacht': 'woman' },
    { 'voornaam': 'Hans', 'acthernaam': 'Schmidt', 'land': 'Duitsland', 'geslacht': 'man' },
    { 'voornaam': 'Sofia', 'acthernaam': 'Lopez', 'land': 'Spanje', 'geslacht': 'woman' },
    { 'voornaam': 'Pierre', 'acthernaam': 'Dupont', 'land': 'Frankrijk', 'geslacht': 'man' },
    { 'voornaam': 'Elena', 'acthernaam': 'Ivanova', 'land': 'Rusland', 'geslacht': 'woman' },
    { 'voornaam': 'Luca', 'acthernaam': 'Rossi', 'land': 'Italië', 'geslacht': 'man' },
    { 'voornaam': 'Nina', 'acthernaam': 'Kowalski', 'land': 'Polen', 'geslacht': 'woman' },
    { 'voornaam': 'Elsa', 'acthernaam': 'Andersson', 'land': 'Zweden', 'geslacht': 'woman' },
    { 'voornaam': 'Hiroshi', 'acthernaam': 'Yamamoto', 'land': 'Japan', 'geslacht': 'man' },
    { 'voornaam': 'Lena', 'acthernaam': 'Kovalenko', 'land': 'Oekraïne', 'geslacht': 'woman' },
    { 'voornaam': 'Maria', 'acthernaam': 'Garcia', 'land': 'Mexico', 'geslacht': 'woman' },
    { 'voornaam': 'Chen', 'acthernaam': 'Li', 'land': 'Chia', 'geslacht': 'man' },
];
var toernooien = [
    { 'naam': "AvesMaria2023", 'land': 'Colombia', 'stad': 'Abaneta', 'date': '2023-11-07', 'prijs': 5 },
    { 'naam': 'FitchburgFMC2023', 'land': 'Verenigde Staten', 'stad': 'Fitchburg', 'date': '2023-11-02', 'prijs': 12 }
];
data_source_1.AppDataSource.initialize().then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var organisator1, organisator2, organisator3, organisator4, organisator5, organisator6, organisator7, organisator8, organisator9, organisator10, organisator11, organisator12, organisator13, organisatoren, spelersStored, _i, spelers_1, spelerData, pers, users, i, toernooienStored, _a, toernooien_1, toernooiData, toernooi, wed, statistieken, i_1, stat;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                organisator1 = new Organisator_1.Organisator();
                organisator1.voornaam = "Max";
                organisator1.achternaam = "Jongbloed";
                organisator1.land = "Nederland";
                organisator1.geslacht = "man";
                organisator1.email = "max.jongbloed123@gmail.com";
                organisator2 = new Organisator_1.Organisator();
                organisator2.voornaam = "Emma";
                organisator2.achternaam = "Johnson";
                organisator2.land = "Verenigde Staten";
                organisator2.geslacht = "vrouw";
                organisator2.email = "emma.johnson2@gmail.com";
                organisator3 = new Organisator_1.Organisator();
                organisator3.voornaam = "Liam";
                organisator3.achternaam = "Brown";
                organisator3.land = "Canada";
                organisator3.geslacht = "man";
                organisator3.email = "liam.brown3@gmail.com";
                organisator4 = new Organisator_1.Organisator();
                organisator4.voornaam = "Olivia";
                organisator4.achternaam = "Smith";
                organisator4.land = "Engeland";
                organisator4.geslacht = "vrouw";
                organisator4.email = "olivia.smith4@gmail.com";
                organisator5 = new Organisator_1.Organisator();
                organisator5.voornaam = "Noah";
                organisator5.achternaam = "Davis";
                organisator5.land = "Australië";
                organisator5.geslacht = "man";
                organisator5.email = "noah.davis5@gmail.com";
                organisator6 = new Organisator_1.Organisator();
                organisator6.voornaam = "Ava";
                organisator6.achternaam = "White";
                organisator6.land = "Germany";
                organisator6.geslacht = "vrouw";
                organisator6.email = "ava.white6@gmail.com";
                organisator7 = new Organisator_1.Organisator();
                organisator7.voornaam = "Sophia";
                organisator7.achternaam = "Hall";
                organisator7.land = "Frankrijk";
                organisator7.geslacht = "vrouw";
                organisator7.email = "sophia.hall7@gmail.com";
                organisator8 = new Organisator_1.Organisator();
                organisator8.voornaam = "Mia";
                organisator8.achternaam = "Lee";
                organisator8.land = "Spanje";
                organisator8.geslacht = "vrouw";
                organisator8.email = "mia.lee8@gmail.com";
                organisator9 = new Organisator_1.Organisator();
                organisator9.voornaam = "Isabella";
                organisator9.achternaam = "Taylor";
                organisator9.land = "Italië";
                organisator9.geslacht = "vrouw";
                organisator9.email = "isabella.taylor9@gmail.com";
                organisator10 = new Organisator_1.Organisator();
                organisator10.voornaam = "Liam";
                organisator10.achternaam = "Brown";
                organisator10.land = "Japan";
                organisator10.geslacht = "man";
                organisator10.email = "liam.brown10@gmail.com";
                organisator11 = new Organisator_1.Organisator();
                organisator11.voornaam = "Sophia";
                organisator11.achternaam = "White";
                organisator11.land = "Duitsland";
                organisator11.geslacht = "vrouw";
                organisator11.email = "sophia.white11@gmail.com";
                organisator12 = new Organisator_1.Organisator();
                organisator12.voornaam = "Mia";
                organisator12.achternaam = "Davis";
                organisator12.land = "Frankrijk";
                organisator12.geslacht = "vrouw";
                organisator12.email = "mia.davis12@gmail.com";
                organisator13 = new Organisator_1.Organisator();
                organisator13.voornaam = "Noah";
                organisator13.achternaam = "Johnson";
                organisator13.land = "Italië";
                organisator13.geslacht = "man";
                organisator13.email = "noah.johnson13@gmail.com";
                organisatoren = [[organisator1, organisator2], [organisator3, organisator4], [organisator5], [organisator6], [organisator7, organisator8, organisator9],
                    [organisator10, organisator11], [organisator3], [organisator13, organisator4, organisator8]
                ];
                console.log("Inserting a new user into the database...");
                spelersStored = [];
                _i = 0, spelers_1 = spelers;
                _b.label = 1;
            case 1:
                if (!(_i < spelers_1.length)) return [3 /*break*/, 4];
                spelerData = spelers_1[_i];
                pers = new Speler_1.Speler();
                pers.voornaam = spelerData.voornaam;
                pers.achternaam = spelerData.acthernaam;
                pers.geslacht = spelerData.geslacht;
                pers.land = spelerData.land;
                spelersStored.push(pers);
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(pers)];
            case 2:
                _b.sent();
                console.log("Saved a new user with id: " + pers.id);
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                console.log("Loading users from the database...");
                return [4 /*yield*/, data_source_1.AppDataSource.manager.find(Persoon_1.Persoon)];
            case 5:
                users = _b.sent();
                console.log("Loaded users: ", users);
                i = 0;
                toernooienStored = [];
                _a = 0, toernooien_1 = toernooien;
                _b.label = 6;
            case 6:
                if (!(_a < toernooien_1.length)) return [3 /*break*/, 9];
                toernooiData = toernooien_1[_a];
                toernooi = new Toernooi_1.Toernooi();
                toernooi.datum = new Date(toernooiData.date);
                toernooi.naam = toernooiData.naam;
                toernooi.land = toernooiData.land;
                toernooi.stad = toernooiData.stad;
                toernooi.deelnamePrijs = toernooiData.prijs;
                toernooi.organisatoren = organisatoren[i];
                i++;
                toernooienStored.push(toernooi);
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(toernooi)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _a++;
                return [3 /*break*/, 6];
            case 9:
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[0];
                wed.speler2 = spelersStored[1];
                wed.tijd1 = 4.4;
                wed.tijd2 = 8.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 10:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[2];
                wed.speler2 = spelersStored[3];
                wed.tijd1 = 8.4;
                wed.tijd2 = 9.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 11:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[4];
                wed.speler2 = spelersStored[5];
                wed.tijd1 = 13.4;
                wed.tijd2 = 10.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 12:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[6];
                wed.speler2 = spelersStored[7];
                wed.tijd1 = 7.4;
                wed.tijd2 = 8.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 13:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[0];
                wed.speler2 = spelersStored[2];
                wed.tijd1 = 4.3;
                wed.tijd2 = 6.7;
                wed.ronde = "halve finale";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 14:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[5];
                wed.speler2 = spelersStored[6];
                wed.tijd1 = 7.8;
                wed.tijd2 = 6.9;
                wed.ronde = "halve finale";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 15:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[0];
                wed.speler2 = spelersStored[6];
                wed.tijd1 = 4.8;
                wed.tijd2 = 5.6;
                wed.ronde = "finale";
                wed.toernooi = toernooienStored[0];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 16:
                _b.sent();
                //wedstrijden voor fitscbburg toernooi
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[5];
                wed.speler2 = spelersStored[6];
                wed.tijd1 = 9.4;
                wed.tijd2 = 10.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 17:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[7];
                wed.speler2 = spelersStored[8];
                wed.tijd1 = 11.4;
                wed.tijd2 = 17.8;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 18:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[9];
                wed.speler2 = spelersStored[10];
                wed.tijd1 = 8.4;
                wed.tijd2 = 10.2;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 19:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[11];
                wed.speler2 = spelersStored[12];
                wed.tijd1 = 23.8;
                wed.tijd2 = 9.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 20:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[13];
                wed.speler2 = spelersStored[14];
                wed.tijd1 = 4.9;
                wed.tijd2 = 5.3;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 21:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[15];
                wed.speler2 = spelersStored[16];
                wed.tijd1 = 18.2;
                wed.tijd2 = 6.6;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 22:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[17];
                wed.speler2 = spelersStored[3];
                wed.tijd1 = 7.4;
                wed.tijd2 = 6.2;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 23:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[4];
                wed.speler2 = spelersStored[5];
                wed.tijd1 = 6.4;
                wed.tijd2 = 9.2;
                wed.ronde = "eerste ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 24:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[5];
                wed.speler2 = spelersStored[7];
                wed.tijd1 = 4.3;
                wed.tijd2 = 6.7;
                wed.ronde = "tweede ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 25:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[9];
                wed.speler2 = spelersStored[12];
                wed.tijd1 = 7.8;
                wed.tijd2 = 6.9;
                wed.ronde = "tweede ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 26:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[13];
                wed.speler2 = spelersStored[16];
                wed.tijd1 = 5.3;
                wed.tijd2 = 4.7;
                wed.ronde = "tweede ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 27:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[3];
                wed.speler2 = spelersStored[4];
                wed.tijd1 = 6.4;
                wed.tijd2 = 5.9;
                wed.ronde = "tweede ronde";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 28:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[5];
                wed.speler2 = spelersStored[12];
                wed.tijd1 = 4.9;
                wed.tijd2 = 5.2;
                wed.ronde = "halve finale";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 29:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[16];
                wed.speler2 = spelersStored[4];
                wed.tijd1 = 5.6;
                wed.tijd2 = 6.2;
                wed.ronde = "halve finale";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 30:
                _b.sent();
                wed = new Wedstrijd_1.Wedstrijd();
                wed.speler1 = spelersStored[16];
                wed.speler2 = spelersStored[5];
                wed.tijd1 = 3.2;
                wed.tijd2 = 3.4;
                wed.ronde = "finale";
                wed.toernooi = toernooienStored[1];
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(wed)];
            case 31:
                _b.sent();
                statistieken = [
                    { wedstrijden: 4, toernooien: 3, record: 12.1 },
                    { wedstrijden: 1, toernooien: 0, record: 2.5 },
                    { wedstrijden: 12, toernooien: 7, record: 24.3 },
                    { wedstrijden: 5, toernooien: 3, record: 8.7 },
                    { wedstrijden: 8, toernooien: 4, record: 18.9 },
                    { wedstrijden: 2, toernooien: 1, record: 6.2 },
                    { wedstrijden: 15, toernooien: 10, record: 31.8 },
                    { wedstrijden: 9, toernooien: 5, record: 14.4 },
                    { wedstrijden: 3, toernooien: 2, record: 5.9 },
                    { wedstrijden: 6, toernooien: 3, record: 10.3 },
                    { wedstrijden: 10, toernooien: 5, record: 19.5 },
                    { wedstrijden: 13, toernooien: 8, record: 27.2 },
                    { wedstrijden: 14, toernooien: 9, record: 29.8 },
                    { wedstrijden: 16, toernooien: 11, record: 34.5 },
                    { wedstrijden: 0, toernooien: 0, record: 16.2 },
                    { wedstrijden: 19, toernooien: 13, record: 18.6 },
                    { wedstrijden: 11, toernooien: 9, record: 22.6 },
                    { wedstrijden: 5, toernooien: 4, record: 12.4 }
                ];
                i_1 = 1;
                _b.label = 32;
            case 32:
                if (!(i_1 < 19)) return [3 /*break*/, 35];
                stat = new Statistiek_1.Statistiek();
                stat.GewonnenWedstrijden = statistieken[i_1 - 1].wedstrijden;
                stat.GewonnenToernooien = statistieken[i_1 - 1].toernooien;
                stat.recordTijd = statistieken[i_1 - 1].record;
                stat.spelerId = i_1;
                return [4 /*yield*/, data_source_1.AppDataSource.manager.save(stat)];
            case 33:
                _b.sent();
                _b.label = 34;
            case 34:
                i_1++;
                return [3 /*break*/, 32];
            case 35:
                console.log("Here you can setup and run express / fastify / any other framework.");
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require("http").createServer(app);
var WebSocket = require('ws');
var wss = new WebSocket.Server({ server: server });
wss.on('connection', function connection(ws) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            ws.on('message', function message(data) {
                //console.log('received: %s', data);
            });
            setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                var stats, array, _i, stats_1, stat, jsonStat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, StatistiekDAO_1.findTopStatistieken)()];
                        case 1:
                            stats = _a.sent();
                            array = [];
                            for (_i = 0, stats_1 = stats; _i < stats_1.length; _i++) {
                                stat = stats_1[_i];
                                jsonStat = JSON.stringify(stat);
                                array.push(jsonStat);
                            }
                            ws.send(JSON.stringify(array));
                            return [2 /*return*/];
                    }
                });
            }); }, 1000);
            return [2 /*return*/];
        });
    });
});
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/views')));
app.get('/', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/tournaments', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/toernooien.html'));
});
app.get('/organisator', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/organisator.html'));
});
app.get('/tournament', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/singleToernooi.html'));
});
app.get('/player', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/speler.html'));
});
app.get('/ranking', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/ranking.html'));
});
app.get('/players', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/players.html'));
});
app.get('/addplayers', function (_, resp) {
    resp.sendFile(path.join(__dirname, '/views/addPlayers.html'));
});
var userrouter = require('./routes/SpelerRouter');
var toernooirouter = require('./routes/ToernooiRouter');
var wedstrijdrouter = require("./routes/WedstrijdRouter");
var organisatorrouter = require("./routes/OrganisatorRouter");
var statistiekrouter = require("./routes/StatistiekRouter");
app.use('/spelers', userrouter); // Place this route definition after the app.use for serving static files.
app.use('/toernooien', toernooirouter);
app.use('/wedstrijden', wedstrijdrouter);
app.use('/organisatoren', organisatorrouter);
app.use('/statistieken', statistiekrouter);
server.listen(3000, function () { console.log("listening on port 3000"); });
console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
//# sourceMappingURL=index.js.map