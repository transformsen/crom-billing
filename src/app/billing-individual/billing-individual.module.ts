import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingIndividualRoutingModule } from './billing-individual-routing.module';
import { BillingIndividualComponent } from './containers/billing-individual/billing-individual.component';
import { BillingInfoComponent } from './containers/billing-info/billing-info.component';
import { PremiumBreakdownComponent } from './containers/premium-breakdown/premium-breakdown.component';
import { SharedModule } from '../shared/shared.module';
import { IndividualService } from './services/individual.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BillingIndividualComponent, BillingInfoComponent, PremiumBreakdownComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BillingIndividualRoutingModule,
    SharedModule
  ],
  providers: [IndividualService],
})
export class BillingIndividualModule { }
