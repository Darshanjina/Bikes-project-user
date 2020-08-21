import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsarticlesComponent } from './detailsarticles.component';

describe('DetailsarticlesComponent', () => {
  let component: DetailsarticlesComponent;
  let fixture: ComponentFixture<DetailsarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
