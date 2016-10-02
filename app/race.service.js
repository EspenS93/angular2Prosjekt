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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var RaceService = (function () {
    function RaceService(http) {
        this.http = http;
        this.racesUrl = 'app/races';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RaceService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    RaceService.prototype.getRaces = function () {
        return this.http.get(this.racesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RaceService.prototype.getRace = function (id) {
        return this.getRaces()
            .then(function (races) { return races.find(function (race) { return race.id === id; }); });
    };
    RaceService.prototype.update = function (race) {
        var url = this.racesUrl + "/" + race.id;
        return this.http
            .put(url, JSON.stringify(race), { headers: this.headers })
            .toPromise()
            .then(function () { return race; })
            .catch(this.handleError);
    };
    RaceService.prototype.create = function (race) {
        return this.http
            .post(this.racesUrl, JSON.stringify({ name: race.name, strength: race.strength, agility: race.agility, intellect: race.intellect }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    RaceService.prototype.delete = function (id) {
        var url = this.racesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    RaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RaceService);
    return RaceService;
}());
exports.RaceService = RaceService;
//# sourceMappingURL=race.service.js.map