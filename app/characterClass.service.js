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
var CharacterClassService = (function () {
    function CharacterClassService(http) {
        this.http = http;
        this.classesUrl = 'app/characterClasses';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CharacterClassService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    CharacterClassService.prototype.getClasses = function () {
        return this.http.get(this.classesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CharacterClassService.prototype.getCharacterClass = function (id) {
        return this.getClasses()
            .then(function (characterClasses) { return characterClasses.find(function (characterClass) { return characterClass.id === id; }); });
    };
    CharacterClassService.prototype.update = function (characterClass) {
        var url = this.classesUrl + "/" + characterClass.id;
        return this.http
            .put(url, JSON.stringify(characterClass), { headers: this.headers })
            .toPromise()
            .then(function () { return characterClass; })
            .catch(this.handleError);
    };
    CharacterClassService.prototype.create = function (characterClass) {
        return this.http
            .post(this.classesUrl, JSON.stringify({ name: characterClass.name, strength: characterClass.strength, agility: characterClass.agility, intellect: characterClass.intellect }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CharacterClassService.prototype.delete = function (id) {
        var url = this.classesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CharacterClassService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharacterClassService);
    return CharacterClassService;
}());
exports.CharacterClassService = CharacterClassService;
//# sourceMappingURL=characterClass.service.js.map