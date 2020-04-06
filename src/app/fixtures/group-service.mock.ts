import { of } from 'rxjs';

export const SUBGROUP_RESPONSE = {

  billingAddress: {
    streetAddr1: '123 Main St.',
    streetAddr2: 'Apt. 201',
    city: 'Des Moines',
    state: 'Iowa',
    zip: '50309'
  },
  billingFrequency: 'Monthly',
  statementType: 'Direct Bill',
  suspendBilling: 'Bill as Normal',
  netAmountDue: 1000,
  currentSuspense: 0,
  eligibilityThroughDate: '12/15/2020',
  potentialLateFeeAmount: 50,
  billingContact: {
    firstName: 'Tim',
    lastName: 'Berg',
    phone: '123-456-7979'
  },
  billingNotes: [{
    modifiedDate: '01/02/2019',
    description: 'Deduct Payment',
    noteFromBilling: 'Lorem ipsum...'
  }, {
    modifiedDate: '05/21/2019',
    description: 'Deduct Payment',
    noteFromBilling: 'Lorem ipsum...'
  }],
  bills: [{
    invoiceNumber: '12345',
    invoiceLink: '/LINK_PARAMS',
    invoiceCreateDate: '01/02/2020',
    billingPeriodBeginDate: '01/01/2020',
    billingPeriodEndDate: '01/31/2020',
    currentPaymentStatus: 'Paid in Full',
    totalAmountBilled: 100
  }, {
    invoiceNumber: '67890',
    invoiceLink: '/LINK_PARAMS',
    invoiceCreateDate: '01/02/2020',
    billingPeriodBeginDate: '01/01/2020',
    billingPeriodEndDate: '01/31/2020',
    currentPaymentStatus: 'Paid in Full',
    totalAmountBilled: 100
  }],
  payments: [{
    createDate: '01/01/2020',
    receivedDate: '01/01/2020',
    paymentMethod: 'Check',
    checkNumber: '123456789',
    amount: 100,
    memo: 'memo description',
    reason: 'reason description'
  }, {
    createDate: '01/01/2020',
    receivedDate: '01/01/2020',
    paymentMethod: 'Refund',
    checkNumber: '123456789',
    amount: -100,
    memo: 'memo description',
    reason: 'reason description'
  }],
  delinquencyCorrespondences: [{
    date: '01/01/2020',
    description: 'description text',
    document: 'document name'
  }, {
    date: '01/01/2020',
    description: 'description text',
    document: 'document name'
  }]
};
export class GroupServiceMock {
  getSubGroupInfo(subGroupId, groupId, planNumber) {
    return of(SUBGROUP_RESPONSE);
  }
}
