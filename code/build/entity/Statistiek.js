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
exports.Statistiek = void 0;
var typeorm_1 = require("typeorm");
var Speler_1 = require("./Speler");
var Statistiek = /** @class */ (function () {
    function Statistiek() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Statistiek.prototype, "spelerId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Statistiek.prototype, "GewonnenWedstrijden", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Statistiek.prototype, "GewonnenToernooien", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 3, scale: 1 }),
        __metadata("design:type", Number)
    ], Statistiek.prototype, "recordTijd", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Speler_1.Speler; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Promise)
    ], Statistiek.prototype, "speler", void 0);
    Statistiek = __decorate([
        (0, typeorm_1.Entity)()
    ], Statistiek);
    return Statistiek;
}());
exports.Statistiek = Statistiek;
//# sourceMappingURL=Statistiek.js.map