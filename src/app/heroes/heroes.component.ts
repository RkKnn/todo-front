import { Component, OnInit } from '@angular/core';
import { GenSample } from '../gen-sample';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: GenSample[] = []
  selectedHero?: GenSample;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: GenSample): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Comp: selected hero(id = ${hero.id})`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
    // this.heroes = this.heroService.getHeroes();
  }
}
