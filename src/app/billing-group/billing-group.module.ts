import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingGroupRoutingModule } from './billing-group-routing.module';
import { BillingGroupComponent } from './containers/billing-group/billing-group.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { GroupService } from './services/group-service';


@NgModule({
  declarations: [BillingGroupComponent],
  imports: [
    CommonModule,
    BillingGroupRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [GroupService]
})
export class BillingGroupModule { }
