import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PricingService {
  constructor() {}
  getData() {
    return [
      {
        head: "Basic",
        rupees: "$47",
        peragraph1: "Officia quaerat eaque neque",
        peragraph2: "Possimus aut consequuntur incidunt",
        peragraph3: "Lorem ipsum dolor sit amet",
        peragraph4: "Consectetur adipisicing elit",
        peragraph5: "Dolorum esse odio quas architecto sint",
        button: "Buy Now"
      },
      {
        head: "Premium",
        rupees: "200",
        peragraph1: "Officia quaerat eaque neque",
        peragraph2: "Possimus aut consequuntur incidunt",
        peragraph3: "Lorem ipsum dolor sit amet",
        peragraph4: "Consectetur adipisicing elit",
        peragraph5: "Dolorum esse odio quas architecto sint",
        button: "Buy Now"
      },
      {
        head: "Personal",
        rupees: "$750",
        peragraph1: "Officia quaerat eaque neque",
        peragraph2: "Possimus aut consequuntur incidunt",
        peragraph3: "Lorem ipsum dolor sit amet",
        peragraph4: "Consectetur adipisicing elit",
        peragraph5: "Dolorum esse odio quas architecto sint",
        button: "Buy Now"
      }
    ];
  }
}
