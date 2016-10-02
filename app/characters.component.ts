import { Component, OnInit } from '@angular/core';
import { Character } from './character'
import { CharacterService } from './character.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.css']
})
export class CharactersComponent implements OnInit {
    selectedCharacter: Character;
    characters: Character[];

    constructor(
        private router: Router,
        private characterService: CharacterService
    ) { }

    ngOnInit(): void {
        this.getCharacters();
    }

    onSelect(character: Character): void {
        this.selectedCharacter = character;
    }

    getCharacters(): void {
        this.characterService
            .getCharacters()
            .then(characters => this.characters = characters);
    }
    gotoDetail(): void {
        this.router.navigate(['/characters/detail', this.selectedCharacter.id]);
    }
    delete(character: Character): void {
        this.characterService
            .delete(character.id)
            .then(() => {
                this.characters = this.characters.filter(h => h !== character);
                if (this.selectedCharacter === character) { this.selectedCharacter = null; }
            });
    }
}