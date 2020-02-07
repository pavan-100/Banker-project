import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  getConstent(){
    return[
    {
      img:"../../../assets/person_5",
      head:"Kaiara Spencer",
      pera:"FINANCE MANAGER",
    },

    {
      img:"../../../assets/person_6",
      head:"Dave Simpson",
      pera:"MARKETING MANAGER",
    },
    {
      img:"../../../assets/person_7",
      head:"Ben Thompson",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_8",
      head:"Kyla Stewart",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_1",
      head:"Kaiara Spencer",
      pera:"ACCOUNTANT",
    },
    {
      img:"../../../assets/person_2",
      head:"Dave Simpson",
      pera:"BANK TELLER",
    },
    {
      img:"../../../assets/person_3",
      head:"Ben Thompson",
      pera:"BANK TELLER",
    },
    {
      img:"../../../assets/person_4",
      head:"Chris Stewart",
      pera:"BANK TELLER",
    },
    ];
  }
}
