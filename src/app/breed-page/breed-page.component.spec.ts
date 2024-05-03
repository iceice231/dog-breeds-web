import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedPageComponent } from './breed-page.component';

describe('BreedPageComponent', () => {
  let component: BreedPageComponent;
  let fixture: ComponentFixture<BreedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
