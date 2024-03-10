"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wedstrijd = void 0;
var typeorm_1 = require("typeorm");
var Speler_1 = require("./Speler");
var Toernooi_1 = require("./Toernooi");
var Wedstrijd = /** @class */ (function () {
    function Wedstrijd() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Wedstrijd.prototype, "wedstrijdId", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 3, scale: 1 }),
        __metadata("design:type", Number)
    ], Wedstrijd.prototype, "tijd1", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 3, scale: 1 }),
        __metadata("design:type", Number)
    ], Wedstrijd.prototype, "tijd2", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Wedstrijd.prototype, "ronde", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Speler_1.Speler; }, function (speler) { return speler.wedstrijdenSpeler1; }),
        __metadata("design:type", Speler_1.Speler)
    ], Wedstrijd.prototype, "speler1", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Speler_1.Speler; }, function (speler) { return speler.wedstrijdenSpeler2; }),
        __metadata("design:type", Speler_1.Speler)
    ], Wedstrijd.prototype, "speler2", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Toernooi_1.Toernooi; }, function (toernooi) { return toernooi.wedstrijden; }),
        __metadata("design:type", Toernooi_1.Toernooi)
    ], Wedstrijd.prototype, "toernooi", void 0);
    Wedstrijd = __decorate([
        (0, typeorm_1.Entity)()
    ], Wedstrijd);
    return Wedstrijd;
}());
exports.Wedstrijd = Wedstrijd;
//# sourceMappingURL=Wedstrijd.js.map