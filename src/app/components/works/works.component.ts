import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.css"]
})
export class WorksComponent implements OnInit {
  num = 0;

  constructor() {}

  ngOnInit() {}

  data: any[] = [
    {
      img: "../../../assets/person_8.jpg",
      head: "01.Online Appilications",
      pera:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },

    {
      img: "../../../assets/slide_2.jpg",
      head: "02. Get an approval",
      pera:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      img: "../../../assets/img_4.jpg",
      head: "03.Card delivery",
      pera: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
      
    }
  ];

  slider: any = this.data[0];

  next() {
    this.num++;
    console.log(this.num);
    if (this.num >= 3) {
      this.num = 0;
    }
    this.slider = this.data[this.num];
  }

  previous() {
    this.num--;
    console.log(this.num);

    if (this.num < 0) {
      this.num = this.data.length - 1;
    }
    this.slider = this.data[this.num];
  }
}
