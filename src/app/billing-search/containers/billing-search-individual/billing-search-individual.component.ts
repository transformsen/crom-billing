import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { BillingIndividual } from '../../models/billing';
import { BillingSearchService } from '../../services/billing-search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-search-individual',
  templateUrl: './billing-search-individual.component.html',
  styleUrls: ['./billing-search-individual.component.scss']
})
export class BillingSearchIndividualComponent implements OnInit, OnDestroy {

  searchFrom = new FormGroup({
    ssn: new FormControl(''),
    policyId: new FormControl(''),
  });

  displayedColumns: string[] = ['policyId', 'policyHolder', 'dateOfBirth',
      'effectiveDate', 'terminationDate', 'policyType', 'groupName'];
  dataSource = new MatTableDataSource<BillingIndividual>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  subscriptions: Subscription = new Subscription();

  constructor(
    private billingSearchService: BillingSearchService
  ) {
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getData();
  }

  search(){
    this.getData();
  }

  reset(){
    this.searchFrom.reset();
  }

  getData(){
    this.subscriptions.add(this.billingSearchService.getIndividualBillings(this.searchFrom.value)
    .subscribe((data) => {
      this.dataSource.data = data;
    }));
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
