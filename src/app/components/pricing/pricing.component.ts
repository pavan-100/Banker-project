import { Component, OnInit } from "@angular/core";
import { PricingService } from "./pricing.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.css"]
})
export class PricingComponent implements OnInit {
  data: any[];

  constructor(private _pricingService: PricingService) {
    this.data = _pricingService.getData();
  }

  ngOnInit() {}
}
