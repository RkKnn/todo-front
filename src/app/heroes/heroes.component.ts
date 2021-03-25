import { Component, OnInit } from '@angular/core';
import { GenSample } from '../gen-sample';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES
  selectedHero?: GenSample;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: GenSample): void {
    this.selectedHero = hero
  }
}
