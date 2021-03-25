import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenSample } from './gen-sample';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes(): Observable<GenSample[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
