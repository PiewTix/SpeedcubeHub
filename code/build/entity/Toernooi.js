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
exports.Toernooi = void 0;
var typeorm_1 = require("typeorm");
var Organisator_1 = require("./Organisator");
var Wedstrijd_1 = require("./Wedstrijd");
var Toernooi = /** @class */ (function () {
    function Toernooi() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Toernooi.prototype, "naam", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], Toernooi.prototype, "datum", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Toernooi.prototype, "deelnamePrijs", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Toernooi.prototype, "stad", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Toernooi.prototype, "land", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Organisator_1.Organisator; }, { cascade: true }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Toernooi.prototype, "organisatoren", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Wedstrijd_1.Wedstrijd; }, function (wedstrijd) { return wedstrijd.toernooi; }),
        __metadata("design:type", Array)
    ], Toernooi.prototype, "wedstrijden", void 0);
    Toernooi = __decorate([
        (0, typeorm_1.Entity)()
    ], Toernooi);
    return Toernooi;
}());
exports.Toernooi = Toernooi;
//# sourceMappingURL=Toernooi.js.map