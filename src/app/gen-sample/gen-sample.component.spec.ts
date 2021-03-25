import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSampleComponent } from './gen-sample.component';

describe('GenSampleComponent', () => {
  let component: GenSampleComponent;
  let fixture: ComponentFixture<GenSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
