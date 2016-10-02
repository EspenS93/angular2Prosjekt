"use strict";
var Database = (function () {
    function Database() {
    }
    Database.prototype.createDb = function () {
        var characters = [
            { id: 1, name: 'Saytold', race: 'Human', characterClass: 'Warrior', strength: 8, agility: 4, intellect: 4 },
            { id: 2, name: 'Lyeran', race: 'Elf', characterClass: 'Mage', strength: 3, agility: 5, intellect: 8 },
            { id: 3, name: 'Enthqua', race: 'Elf', characterClass: 'Rogue', strength: 5, agility: 6, intellect: 5 },
            { id: 4, name: 'Enina', race: 'Dwarf', characterClass: 'Warrior', strength: 9, agility: 4, intellect: 3 },
            { id: 5, name: 'Cilus', race: 'Gnome', characterClass: 'Mage', strength: 3, agility: 4, intellect: 9 },
            { id: 6, name: 'Dyndar', race: 'Orc', characterClass: 'Paladin', strength: 8, agility: 3, intellect: 5 },
            { id: 7, name: 'Hokalash', race: 'Orc', characterClass: 'Mage', strength: 6, agility: 4, intellect: 6 },
            { id: 8, name: 'Iseri', race: 'Elf', characterClass: 'Rogue', strength: 5, agility: 6, intellect: 5 },
            { id: 9, name: 'Rhaysh', race: 'Undead', characterClass: 'Rogue', strength: 6, agility: 6, intellect: 4 },
            { id: 10, name: 'Areldu', race: 'Dwarf', characterClass: 'Paladin', strength: 7, agility: 3, intellect: 6 }
        ];
        var races = [
            { id: 1, name: 'Human', strength: 3, agility: 2, intellect: 3 },
            { id: 2, name: 'Elf', strength: 2, agility: 3, intellect: 3 },
            { id: 3, name: 'Dwarf', strength: 4, agility: 2, intellect: 2 },
            { id: 4, name: 'Undead', strength: 3, agility: 3, intellect: 2 },
            { id: 5, name: 'Orc', strength: 5, agility: 2, intellect: 1 },
            { id: 6, name: 'Gnome', strength: 2, agility: 2, intellect: 4 }
        ];
        var characterClasses = [
            { id: 1, name: 'Warrior', strength: 5, agility: 2, intellect: 1 },
            { id: 2, name: 'Mage', strength: 1, agility: 2, intellect: 5 },
            { id: 3, name: 'Rogue', strength: 3, agility: 3, intellect: 2 },
            { id: 4, name: 'Paladin', strength: 3, agility: 1, intellect: 4 }
        ];
        return { characters: characters, races: races, characterClasses: characterClasses };
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=database.js.map