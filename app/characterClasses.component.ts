import { Component, OnInit } from '@angular/core';
import { CharacterClass } from './characterClass'
import { CharacterClassService } from './characterClass.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-classes',
    templateUrl: 'characterClasses.component.html',
    styleUrls: ['characterClasses.component.css']
})
export class CharacterClassesComponent implements OnInit {
    selectedCharacterClass: CharacterClass;
    characterClasses: CharacterClass[];

    constructor(
        private router: Router,
        private characterClassService: CharacterClassService
    ) { }

    ngOnInit(): void {
        this.getCharacterClass();
    }

    onSelect(characterClass: CharacterClass): void {
        this.selectedCharacterClass = characterClass;
    }

    getCharacterClass(): void {
        this.characterClassService
            .getClasses()
            .then(characterClasses => this.characterClasses = characterClasses);
    }
    gotoDetail(): void {
        this.router.navigate(['/classes/detail', this.selectedCharacterClass.id]);
    }
    delete(characterClass: CharacterClass): void {
        this.characterClassService
            .delete(characterClass.id)
            .then(() => {
                this.characterClasses = this.characterClasses.filter(h => h !== characterClass);
                if (this.selectedCharacterClass === characterClass) { this.selectedCharacterClass = null; }
            });
    }
}