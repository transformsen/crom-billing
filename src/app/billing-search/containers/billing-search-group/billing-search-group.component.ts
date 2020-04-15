import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BillingSearchService } from '../../services/billing-search.service';
import { BillingGroup } from '../../models/billing';

@Component({
  selector: 'app-billing-search-group',
  templateUrl: './billing-search-group.component.html',
  styleUrls: ['./billing-search-group.component.scss']
})
export class BillingSearchGroupComponent implements OnInit, OnDestroy {
  searchFrom = new FormGroup({
    groupName: new FormControl(''),
    groupId: new FormControl(''),
    subgroupId: new FormControl('')
  });

  displayedColumns: string[] = ['groupId', 'groupName', 'subGroupId', 'subGroupName',
      'effectiveDate', 'terminationDate'];
  dataSource = new MatTableDataSource<BillingGroup>([]);
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
    this.search();
  }

  getData(){
    this.subscriptions.add(this.billingSearchService.getGroupBillings(this.searchFrom.value)
    .subscribe((data) => {
      this.dataSource.data = data.results;
    }, (error) => {
      console.error('Error while fetching GroupBillings', error);
    }));
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
