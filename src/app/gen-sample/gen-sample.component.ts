import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenSample } from '../gen-sample';

@Component({
  selector: 'app-gen-sample',
  templateUrl: './gen-sample.component.html',
  styleUrls: ['./gen-sample.component.scss']
})

export class GenSampleComponent implements OnInit {
  @Input() hero?: GenSample;

  constructor() {
  }

  ngOnInit(): void {
  }
}
