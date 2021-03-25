import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenSample } from '../gen-sample';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-gen-sample',
  templateUrl: './gen-sample.component.html',
  styleUrls: ['./gen-sample.component.scss']
})

export class GenSampleComponent implements OnInit {
  @Input() hero?: GenSample;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getHero()
  }

  getHero() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) return;
    this.heroService.getHero(+id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back()
  }
}
