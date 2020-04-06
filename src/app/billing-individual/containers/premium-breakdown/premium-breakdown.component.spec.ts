import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBreakdownComponent } from './premium-breakdown.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { INDIVIDUAL_RESPONSE } from 'src/app/fixtures/individual.service.mock';

describe('PremiumBreakdownComponent', () => {
  let component: PremiumBreakdownComponent;
  let fixture: ComponentFixture<PremiumBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumBreakdownComponent ],
      imports: [SharedModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumBreakdownComponent);
    component = fixture.componentInstance;
    component.value = INDIVIDUAL_RESPONSE as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
