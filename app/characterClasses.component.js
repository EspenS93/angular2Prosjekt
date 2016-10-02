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
var characterClass_service_1 = require('./characterClass.service');
var router_1 = require('@angular/router');
var CharacterClassesComponent = (function () {
    function CharacterClassesComponent(router, characterClassService) {
        this.router = router;
        this.characterClassService = characterClassService;
    }
    CharacterClassesComponent.prototype.ngOnInit = function () {
        this.getCharacterClass();
    };
    CharacterClassesComponent.prototype.onSelect = function (characterClass) {
        this.selectedCharacterClass = characterClass;
    };
    CharacterClassesComponent.prototype.getCharacterClass = function () {
        var _this = this;
        this.characterClassService
            .getClasses()
            .then(function (characterClasses) { return _this.characterClasses = characterClasses; });
    };
    CharacterClassesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/classes/detail', this.selectedCharacterClass.id]);
    };
    CharacterClassesComponent.prototype.delete = function (characterClass) {
        var _this = this;
        this.characterClassService
            .delete(characterClass.id)
            .then(function () {
            _this.characterClasses = _this.characterClasses.filter(function (h) { return h !== characterClass; });
            if (_this.selectedCharacterClass === characterClass) {
                _this.selectedCharacterClass = null;
            }
        });
    };
    CharacterClassesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-classes',
            templateUrl: 'characterClasses.component.html',
            styleUrls: ['characterClasses.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, characterClass_service_1.CharacterClassService])
    ], CharacterClassesComponent);
    return CharacterClassesComponent;
}());
exports.CharacterClassesComponent = CharacterClassesComponent;
//# sourceMappingURL=characterClasses.component.js.map