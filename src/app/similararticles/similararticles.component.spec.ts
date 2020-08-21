import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilararticlesComponent } from './similararticles.component';

describe('SimilararticlesComponent', () => {
  let component: SimilararticlesComponent;
  let fixture: ComponentFixture<SimilararticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilararticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilararticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
