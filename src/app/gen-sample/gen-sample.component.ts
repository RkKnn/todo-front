import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GenSample } from '../gen-sample';

@Component({
  selector: 'app-gen-sample',
  templateUrl: './gen-sample.component.html',
  styleUrls: ['./gen-sample.component.scss']
})

export class GenSampleComponent implements OnInit {
  hero: GenSample = {
    id: 1,
    name: "Windstorm"
  };

  constructor() { }

  ngOnInit(): void {
  }
}
