import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenSample } from './gen-sample';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<GenSample[]> {
    const heroes = of(HEROES);
    this.messageService.add("heroService: fetched heroes")
    return heroes;
  }

  getHero(id: number): Observable<GenSample> {
    const hero: GenSample = HEROES.find(value => value.id === id) as GenSample;
    this.messageService.add(`find hero: id = ${id}`)
    return of(hero)
  }
}
