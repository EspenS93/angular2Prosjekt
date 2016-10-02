import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Race } from './race';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RaceService {
    private racesUrl = 'app/races';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getRaces(): Promise<Race[]> {
        return this.http.get(this.racesUrl)
            .toPromise()
            .then(response => response.json().data as Race[])
            .catch(this.handleError);
            
    }

    getRace(id: number): Promise<Race> {
        return this.getRaces()
            .then(races => races.find(race => race.id === id));
    }

    update(race: Race): Promise<Race> {
        const url = `${this.racesUrl}/${race.id}`;
        return this.http
            .put(url, JSON.stringify(race), { headers: this.headers })
            .toPromise()
            .then(() => race)
            .catch(this.handleError);
    }
    create(race: Race): Promise<Race> {

        return this.http
            .post(this.racesUrl, JSON.stringify({ name: race.name, strength: race.strength, agility: race.agility, intellect: race.intellect }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.racesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}