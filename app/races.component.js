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
var race_service_1 = require('./race.service');
var router_1 = require('@angular/router');
var RacesComponent = (function () {
    function RacesComponent(router, raceService) {
        this.router = router;
        this.raceService = raceService;
    }
    RacesComponent.prototype.ngOnInit = function () {
        this.getRaces();
    };
    RacesComponent.prototype.onSelect = function (race) {
        this.selectedRace = race;
    };
    RacesComponent.prototype.getRaces = function () {
        var _this = this;
        this.raceService
            .getRaces()
            .then(function (races) { return _this.races = races; });
    };
    RacesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/races/detail', this.selectedRace.id]);
    };
    RacesComponent.prototype.delete = function (race) {
        var _this = this;
        this.raceService
            .delete(race.id)
            .then(function () {
            _this.races = _this.races.filter(function (h) { return h !== race; });
            if (_this.selectedRace === race) {
                _this.selectedRace = null;
            }
        });
    };
    RacesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-races',
            templateUrl: 'races.component.html',
            styleUrls: ['races.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, race_service_1.RaceService])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map