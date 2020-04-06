import { Component, OnInit, Input } from '@angular/core';
import { BillingIndividualInfo } from 'src/app/models/billing-individual-info';
import { PremiaumBreakdownDTO } from 'src/app/models/premium-breakdown-rate';

@Component({
  selector: 'app-premium-breakdown',
  templateUrl: './premium-breakdown.component.html',
  styleUrls: ['./premium-breakdown.component.scss']
})
export class PremiumBreakdownComponent implements OnInit {

  policyId: string;
  otherPage = 0;
  INDIVIDUAL_INFO: BillingIndividualInfo;
  futureRate: PremiaumBreakdownDTO;
  currentRate: PremiaumBreakdownDTO;
  previousRate: PremiaumBreakdownDTO;
  otherPbRates: PremiaumBreakdownDTO[] = [];

  selectStates = {
    featureRate: false,
    currentRate: {
      parent: false
    },
    pastRate: {
      parent: false
    }
  };

  @Input('individualInfo')
  public set value(v: BillingIndividualInfo) {
    this.INDIVIDUAL_INFO = v;
    const now = new Date().getTime();
    // sort rate dates
    v.premiumBreakdown.sort((a, b) => {
      const aStart = Date.parse(a.eligibilityBeginDate);
      const bStart = Date.parse(b.eligibilityBeginDate);
      if (aStart > bStart) {
        return -1;
      } else {
        return 1;
      }
    })
    // group by date
    .map((m) => {
      const startDate = Date.parse(m.eligibilityBeginDate);
      const endDate = Date.parse(m.eligibilityEndDate);
      if (now > startDate && now < endDate) {
        this.currentRate = m;
      } else if (now < startDate) {
        this.futureRate = m;
      } else {
        this.otherPbRates.push(m);
      }
      return m;
    });
    this.previousRate = this.otherPbRates.shift();
  }


  ngOnInit(): void {
  }

}
