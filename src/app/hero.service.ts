import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenSample } from './gen-sample';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getHeroes(): Observable<GenSample[]> {
    console.log('access localhost');
    let a = this.http.get('http://localhost:4200/api/todos');
    // let a = this.http.get('/heroes');
    a.subscribe(value => {
      console.log(value);
    })

    const heroes = of(HEROES);
    this.messageService.add('heroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<GenSample> {
    const hero: GenSample = HEROES.find(value => value.id === id) as GenSample;
    this.messageService.add(`find hero: id = ${id}`)
    return of(hero)
  }

  log(message: string) {
    this.messageService.add(`hero service: ${message}`)
  }
}
