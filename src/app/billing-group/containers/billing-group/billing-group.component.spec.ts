import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingGroupComponent } from './billing-group.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GroupService } from '../../services/group-service';
import { GroupServiceMock } from 'src/app/fixtures/group-service.mock';

describe('BillingGroupComponent', () => {
  let component: BillingGroupComponent;
  let fixture: ComponentFixture<BillingGroupComponent>;

  const activatedRouteMock = {params: of({
      subGroupId: 'group1',
      planNumber: 'plan1',
      groupId: 'groupid1',
      subGroupName: 'subGroup'
    })};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingGroupComponent ],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{provide: ActivatedRoute, useValue: activatedRouteMock},
      {provide: GroupService, useClass: GroupServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
