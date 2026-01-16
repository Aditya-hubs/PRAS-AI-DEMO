import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recommendationComponent } from './recommendation.component';

describe('reccomendationComponent', () => {
  let component: recommendationComponent;
  let fixture: ComponentFixture<recommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [recommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(recommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
