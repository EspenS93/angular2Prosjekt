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
var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
        this.charactersUrl = 'app/characters';
        this.racesUrl = 'app/races';
        this.classesUrl = 'app/characterClasses';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CharacterService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    CharacterService.prototype.getCharacters = function () {
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.getCharacter = function (id) {
        return this.getCharacters()
            .then(function (characters) { return characters.find(function (character) { return character.id === id; }); });
    };
    CharacterService.prototype.update = function (character) {
        var url = this.charactersUrl + "/" + character.id;
        return this.http
            .put(url, JSON.stringify(character), { headers: this.headers })
            .toPromise()
            .then(function () { return character; })
            .catch(this.handleError);
    };
    CharacterService.prototype.create = function (character) {
        return this.http
            .post(this.charactersUrl, JSON.stringify({ name: character.name, race: character.race, characterClass: character.characterClass, strength: character.strength, agility: character.agility, intellect: character.intellect }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.delete = function (id) {
        var url = this.charactersUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CharacterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map