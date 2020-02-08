import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  getData(){
    return[
      {
        img:"../../../assets/img_1.jpg",
      },
      {
        img:"../../../assets/img_2.jpg",
      },
      {
        img:"../../../assets/img_3.jpg",
      },
      {
        img:"../../../assets/img_4.jpg",
      },
      {
        img:"../../../assets/img_5.jpg",
      },
      {
        img:"../../../assets/img_1.jpg",
      },
      {
        img:"../../../assets/img_2.jpg",
      },
      {
        img:"../../../assets/img_3.jpg",
      },
      {
        img:"../../../assets/img_4.jpg",
      },
      {
        img:"../../../assets/img_5.jpg",
      },
      {
        img:"../../../assets/img_1.jpg",
      },
      {
        img:"../../../assets/img_2.jpg",
      },
    ];
  }
}
