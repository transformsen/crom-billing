import { of } from 'rxjs';

export const INDIVIDUAL_RESPONSE = {
    policyHolder: 'John James Wilkes',
    policyHolderGuid: 'ebd7dd05-b998-4735-9a8d-643d09ec99f3',
    policyId: 'W0012345',
    subgroupName: 'Test Sub Group',
    billingAddress: {
        streetAddr1: '123 Main St.',
        streetAddr2: 'Apt. 201',
        city: 'Des Moines',
        state: 'Iowa',
        zip: '50309'
    },
    billingFrequency: 'Monthly',
    statementType: 'Direct Bill',
    paymentDeferredDate: '1st of the month',
    suspendBilling: 'Bill as Normal',
    netAmountDue: 1000,
    currentSuspense: '0',
    eligibilityThroughDate: '12/15/2020',
    aptcEndDate: '12/31/2020',
    marketSegment: 'Grandfathered',
    totalPremiumsPaidByYear: [{
        year: '2019',
        amount: 1000
    }, {
        year: '2018',
        amount: 1000
    }],
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
    delinquencyCorrespondence: [{
        date: '01/01/2020',
        description: 'description text',
        document: 'document name'
    }, {
        date: '01/01/2020',
        description: 'description text',
        document: 'document name'
    }],
    aptcHistory: [{
        effectiveDate: '01/01/2020',
        terminationDate: '12/31/2020',
        amount: 100
    }, {
        effectiveDate: '01/01/2020',
        terminationDate: '12/31/2020',
        amount: 100
    }],
    dbiHistory: [{
        lastUpdate: '01/01/2020',
        description: 'description text',
        amount: 1000
    }, {
        lastUpdate: '01/01/2020',
        description: 'description text',
        amount: 1000
    }],
    premiumBreakdown: [{
        eligibilityBeginDate: '01/01/2019',
        eligibilityEndDate: '12/31/2019',
        productName: 'Pool V FB as Gold 1000',
        marketSegment: 'Grandfathered',
        totalPremium: 4009.25,
        policyMemberDetails: [{
            firstName: 'John',
            middleName: 'James',
            lastName: 'Wilkes',
            memberStatus: 'Policy Holder',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1009.25,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 9.25
        }, {
            firstName: 'Mary',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Spouse',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Jo',
            middleName: '',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Bobby',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }]
    }, {
        eligibilityBeginDate: '01/01/2020',
        eligibilityEndDate: '12/31/2020',
        productName: 'Pool V FB as Gold 1000',
        marketSegment: 'Grandfathered',
        totalPremium: 4009.25,
        policyMemberDetails: [{
            firstName: 'John',
            middleName: 'James',
            lastName: 'Wilkes',
            memberStatus: 'Policy Holder',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1009.25,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 9.25
        }, {
            firstName: 'Mary',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Spouse',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Jo',
            middleName: '',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Bobby',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }]
    }, {
        eligibilityBeginDate: '01/01/2021',
        eligibilityEndDate: '12/31/2021',
        productName: 'Pool V FB as Gold 1000',
        marketSegment: 'Grandfathered',
        totalPremium: 4009.25,
        policyMemberDetails: [{
            firstName: 'John',
            middleName: 'James',
            lastName: 'Wilkes',
            memberStatus: 'Policy Holder',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1009.25,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 9.25
        }, {
            firstName: 'Mary',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Spouse',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Jo',
            middleName: '',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }, {
            firstName: 'Bobby',
            middleName: 'Ann',
            lastName: 'Wilkes',
            memberStatus: 'Dependent',
            rateArea: 'NDHD',
            tobaccoStatus: 'not applicable',
            memberPremiumTotal: 1000,
            medicalRate: 250,
            dentalRate: 250,
            visionRate: 250,
            contraceptiveRate: 250,
            serviceFee: 0
        }]
    }],
    processedDateForTermination : ''
};

export class IndividualServiceMock {

    getIndividualBillingsData(ioi: string) {
        return of(INDIVIDUAL_RESPONSE);
    }

}
