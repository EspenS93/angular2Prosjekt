import { Component, OnInit } from '@angular/core';
import { Race } from './race'
import { RaceService } from './race.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-races',
    templateUrl: 'races.component.html',
    styleUrls: ['races.component.css']
})
export class RacesComponent implements OnInit {
    selectedRace: Race;
    races: Race[];

    constructor(
        private router: Router,
        private raceService: RaceService
    ) { }

    ngOnInit(): void {
        this.getRaces();
    }

    onSelect(race: Race): void {
        this.selectedRace = race;
    }

    getRaces(): void {
        this.raceService
            .getRaces()
            .then(races => this.races = races);
    }
    gotoDetail(): void {
        this.router.navigate(['/races/detail', this.selectedRace.id]);
    }
    delete(race: Race): void {
        this.raceService
            .delete(race.id)
            .then(() => {
                this.races = this.races.filter(h => h !== race);
                if (this.selectedRace === race) { this.selectedRace = null; }
            });
    }
}