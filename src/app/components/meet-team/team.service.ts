import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  getConstent(){
    return[
    {
      img:"../../../assets/person_5.jpg",
      head:"Kaiara Spencer",
      pera:"FINANCE MANAGER",
    },

    {
      img:"../../../assets/person_6.jpg",
      head:"Dave Simpson",
      pera:"MARKETING MANAGER",
    },
    {
      img:"../../../assets/person_7.jpg",
      head:"Ben Thompson",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_8.jpg",
      head:"Kyla Stewart",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_1.jpg",
      head:"Kaiara Spencer",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_2.jpg",
      head:"Dave Simpson",
      pera:"BANK TELLER",
    },
    {
      img:"../../../assets/person_3.jpg",
      head:"Ben Thompson",
      pera:"BANK TELLER",
    },
    {
      img:"../../../assets/person_4.jpg",
      head:"Chris Stewart",
      pera:"BANK TELLER",
    },
    ];
  }
}
