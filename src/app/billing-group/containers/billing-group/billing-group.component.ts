import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group-service';
import { Title } from '@angular/platform-browser';
import { BillingGroupInfo } from 'src/app/models/billing-group-info';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-billing-group',
  templateUrl: './billing-group.component.html',
  styleUrls: ['./billing-group.component.scss']
})
export class BillingGroupComponent implements OnInit {

  billingGroupInfo: BillingGroupInfo;
  subGroupId: string;
  subGroupName: string;
  groupId: string;
  planNumber: string;
  selectable = true;
  selectStates = {
    billingFrequency: false,
    statementType: false,
    suspendBilling: false,
    netAmountDue: false,
    currentSuspense: false,
    eligibilityThroughDate: false,
    potentialLateFeeAmount: false,
    name: false,
    phone: false
  };

  billingNotesColumns: string[] = ['modifiedDate',
    'description', 'noteFromBilling',
  ];
  billingNotesdataSource = new MatTableDataSource<any>([]);
  @ViewChild('billingNotesPaginator', {static: true}) billingNotesPaginator: MatPaginator;
  @ViewChild('billingNotesSort', {read: MatSort, static: true}) billingNotesSort: MatSort;
  selection = new SelectionModel<any>(true, []);

  billsdataSource = new MatTableDataSource<any>([]);
  @ViewChild('billsPaginator', {static: true}) billsPaginator: MatPaginator;
  @ViewChild('billsSort', {read: MatSort, static: true}) billsSort: MatSort;
  billsColumns: string[] = [
      'select',
      'invoiceNumber',
      'invoiceCreateDate',
      'billingPeriodBeginDate',
      'billingPeriodEndDate',
      'currentPaymentStatus',
      'totalAmountBilled'
  ];

  paymentsdataSource = new MatTableDataSource<any>([]);
  @ViewChild('paymentsPaginator', {static: true}) paymentsPaginator: MatPaginator;
  @ViewChild('paymentsSort', {read: MatSort, static: true}) paymentsSort: MatSort;
  paymentsColumns: string[] = [
    'select', 'createDate', 'receivedDate', 'paymentMethod', 'checkNumber', 'amount',
      'memo',
      'reason',
  ];

  deliquencydataSource = new MatTableDataSource<any>([]);
  @ViewChild('deliquencyPaginator', {static: true}) deliquencyPaginator: MatPaginator;
  @ViewChild('deliquencySort', {read: MatSort, static: true}) deliquencySort: MatSort;
  deliquencyColumns: string[] = [
    'select',
      'date',
      'description',
      'document' ];



  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService
    ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.subGroupId = params.subGroupId;
      this.planNumber = params.planNumber;
      this.groupId = params.groupId;
      this.subGroupName = params.subGroupName;
      this.getSubGroupInfo();
    });
  }

  /**
   * Fetch subgroup details
   */
  getSubGroupInfo() {
    this.groupService.getSubGroupInfo(this.subGroupId, this.groupId, this.planNumber).subscribe((resp) => {
      this.billingGroupInfo = resp;
      this.billingNotesdataSource.paginator = this.billingNotesPaginator;
      this.billingNotesdataSource.sort = this.billingNotesSort;
      this.billingNotesdataSource.data = this.billingGroupInfo.billingNotes;

      this.billsdataSource.paginator =  this.billsPaginator;
      this.billsdataSource.sort = this.billsSort;
      this.billsdataSource.data = this.billingGroupInfo.bills;

      this.paymentsdataSource.paginator =  this.paymentsPaginator;
      this.paymentsdataSource.sort =  this.paymentsSort;
      this.paymentsdataSource.data = this.billingGroupInfo.payments;

      this.deliquencydataSource.paginator =  this.deliquencyPaginator;
      this.deliquencydataSource.sort = this.deliquencySort;
      this.deliquencydataSource.data = this.billingGroupInfo.delinquencyCorrespondences;
    }, (error) => {
      console.error('Error while fetching subgroup info', error);
    });
  }

}
