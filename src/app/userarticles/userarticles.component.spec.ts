import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserarticlesComponent } from './userarticles.component';

describe('UserarticlesComponent', () => {
  let component: UserarticlesComponent;
  let fixture: ComponentFixture<UserarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
