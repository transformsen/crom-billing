import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingIndividualComponent } from './containers/billing-individual/billing-individual.component';

const routes: Routes = [{ path: ':policyId', component: BillingIndividualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingIndividualRoutingModule { }
