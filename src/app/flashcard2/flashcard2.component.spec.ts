import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flashcard2Component } from './flashcard2.component';

describe('Flashcard2Component', () => {
  let component: Flashcard2Component;
  let fixture: ComponentFixture<Flashcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flashcard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flashcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
