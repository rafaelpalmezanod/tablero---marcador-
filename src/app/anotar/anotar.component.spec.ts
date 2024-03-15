import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotarComponent } from './anotar.component';

describe('AnotarComponent', () => {
  let component: AnotarComponent;
  let fixture: ComponentFixture<AnotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
