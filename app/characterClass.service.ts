import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CharacterClass } from './characterClass';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterClassService {

    private classesUrl = 'app/characterClasses';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }



    getClasses(): Promise<CharacterClass[]> {
        return this.http.get(this.classesUrl)
            .toPromise()
            .then(response => response.json().data as CharacterClass[])
            .catch(this.handleError);
            
    }

    getCharacterClass(id: number): Promise<CharacterClass> {
        return this.getClasses()
            .then(characterClasses => characterClasses.find(characterClass => characterClass.id === id));
    }

    update(characterClass: CharacterClass): Promise<CharacterClass> {
        const url = `${this.classesUrl}/${characterClass.id}`;
        return this.http
            .put(url, JSON.stringify(characterClass), { headers: this.headers })
            .toPromise()
            .then(() => characterClass)
            .catch(this.handleError);
    }
    create(characterClass: CharacterClass): Promise<CharacterClass> {

        return this.http
            .post(this.classesUrl, JSON.stringify({ name: characterClass.name, strength: characterClass.strength, agility: characterClass.agility, intellect: characterClass.intellect }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.classesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}