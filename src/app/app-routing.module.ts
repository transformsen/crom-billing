import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./billing-search/billing-search.module')
      .then(m => m.BillingSearchModule) },
  { path: 'billing-individual', loadChildren: () => import('./billing-individual/billing-individual.module')
      .then(m => m.BillingIndividualModule) },
  { path: 'billing-group', loadChildren: () => import('./billing-group/billing-group.module')
      .then(m => m.BillingGroupModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
