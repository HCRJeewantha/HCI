import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LankaMapComponent } from './lanka-map.component';

describe('LankaMapComponent', () => {
  let component: LankaMapComponent;
  let fixture: ComponentFixture<LankaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LankaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LankaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
