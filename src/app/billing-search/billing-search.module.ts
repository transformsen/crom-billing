import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingSearchRoutingModule } from './billing-search-routing.module';
import { BillingSearchComponent } from './containers/billing-search/billing-search.component';
import { SharedModule } from '../shared/shared.module';
import { BillingSearchGroupComponent } from './containers/billing-search-group/billing-search-group.component';
import { BillingSearchIndividualComponent } from './containers/billing-search-individual/billing-search-individual.component';
import { BillingSearchService } from './services/billing-search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BillingSearchComponent,
    BillingSearchGroupComponent, BillingSearchIndividualComponent],
  imports: [
    CommonModule,
    BillingSearchRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [BillingSearchService],
})
export class BillingSearchModule { }
