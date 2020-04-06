import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingSearchComponent } from './containers/billing-search/billing-search.component';

const routes: Routes = [{ path: '', component: BillingSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingSearchRoutingModule { }
