import { Component, OnInit } from '@angular/core';
import { BillingIndividualInfo } from 'src/app/models/billing-individual-info';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IndividualService } from '../../services/individual.service';

@Component({
  selector: 'app-billing-individual',
  templateUrl: './billing-individual.component.html',
  styleUrls: ['./billing-individual.component.scss']
})
export class BillingIndividualComponent implements OnInit {

  policyId: string;
  policyHolderGuid: string;
  policyHolderName: string;
  data: BillingIndividualInfo;
  index = 0;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private individualService: IndividualService
    ) {

  }

  ngOnInit(){
    this.title.setTitle('Billing Search');
    this.route.params.subscribe((params) => {
      this.policyId = params.policyId;
      this.getIndividualInfo();
    });
    this.route.queryParams.subscribe((params) => {
      this.policyHolderGuid = params.policyHolderGuid;
    });
  }
  /**
   * Fetch individual info
   */
  getIndividualInfo() {
    this.individualService.getIndividualBillingsData(this.policyId)
    .subscribe((resp) => {
      this.data = resp;
      this.title.setTitle(`${this.data.policyHolder} - Billing`);
    });
  }
  goToPremiumBreakdown(){
    this.index = 1;
  }
  selectTab($event){
    this.index = $event;
  }
}
