import { Component, Input, Output, ViewChild, OnInit, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BillingIndividualInfo } from 'src/app/models/billing-individual-info';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

const { AppId, BaseDomain } = environment;
@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {

  selectable = true;
  AppId = AppId;
  BaseDomain = BaseDomain;
  @Input() individualInfo: BillingIndividualInfo;
  @Input() policyHolderGuid: string;
  // viewBreakDown clicked ( => change tab)
  @Output() viewBreakDown = new EventEmitter();

  billingNotesColumns: string[] = ['modifiedDate',
      'description', 'noteFromBilling',
  ];
  billingNotesdataSource = new MatTableDataSource<any>([]);
  @ViewChild('billingNotesPaginator', {static: true}) billingNotesPaginator: MatPaginator;
  selection = new SelectionModel<any>(true, []);

  billsdataSource = new MatTableDataSource<any>([]);
  @ViewChild('billsPaginator', {static: true}) billsPaginator: MatPaginator;
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
  paymentsColumns: string[] = [
    'select', 'createDate', 'receivedDate', 'paymentMethod', 'checkNumber', 'amount',
      'memo',
      'reason',
  ];

  deliquencydataSource = new MatTableDataSource<any>([]);
  @ViewChild('deliquencyPaginator', {static: true}) deliquencyPaginator: MatPaginator;
  deliquencyColumns: string[] = [
    'select',
      'date',
      'description',
      'document' ];

    advancedPremiumdataSource = new MatTableDataSource<any>([]);
    @ViewChild('advancedPremiumPaginator', {static: true}) advancedPremiumPaginator: MatPaginator;
    advancedPremiumTaxColumns: string[] = [
      'select', 'effectiveDate', 'terminationDate', 'amount'];

      discretionarydataSource = new MatTableDataSource<any>([]);
    @ViewChild('discretionaryPaginator', {static: true}) discretionaryPaginator: MatPaginator;
  discretionaryBillingItemsColumns: string[] = [
      'select',
      'lastUpdate',
      'description',
      'amount'];
  processedDateForTermination = {
    label: 'Last Processed Date for Termination',
    value: '02/02/2020'
  };

  selectStates = {
    billingFrequency: false,
    statementType: false,
    paymentDeferredDate: false,
    suspendBilling: false,
    currentSuspense: false,
    eligibilityThroughDate: false,
    marketSegment: false,
    aptcEndDate: false,
    netAmountDue: false,
    years: {},
    bills: {},
    payments: {},
    deliquency: {},
    advancedPremium: {},
    dib: {},
    processedDateForTermination: false
  };

  ngOnInit(){
    this.billingNotesdataSource.paginator = this.billingNotesPaginator;
    this.billingNotesdataSource.data = this.individualInfo.billingNotes;

    this.billsdataSource.paginator =  this.billsPaginator;
    this.billsdataSource.data = this.individualInfo.bills;

    this.paymentsdataSource.paginator =  this.paymentsPaginator;
    this.paymentsdataSource.data = this.individualInfo.payments;

    this.deliquencydataSource.paginator =  this.deliquencyPaginator;
    this.deliquencydataSource.data = this.individualInfo.delinquencyCorrespondence;

    this.advancedPremiumdataSource.paginator =  this.advancedPremiumPaginator;
    this.advancedPremiumdataSource.data = this.individualInfo.aptcHistory;

    this.discretionarydataSource.paginator =  this.discretionaryPaginator;
    this.discretionarydataSource.data = this.individualInfo.dbiHistory;
  }


}
