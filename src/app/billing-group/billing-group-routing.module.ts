import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingGroupComponent } from './containers/billing-group/billing-group.component';

const routes: Routes = [{ path: ':subGroupName/:groupId/:subGroupId/:planNumber', component: BillingGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingGroupRoutingModule { }
