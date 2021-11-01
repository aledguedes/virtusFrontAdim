import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaparoquiaComponent } from './novaparoquia.component';

describe('NovaparoquiaComponent', () => {
  let component: NovaparoquiaComponent;
  let fixture: ComponentFixture<NovaparoquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaparoquiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaparoquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
