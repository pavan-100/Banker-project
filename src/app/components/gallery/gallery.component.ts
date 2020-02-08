import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data:any[];

  constructor(private _galleryService: GalleryService) { 
    this.data = _galleryService.getData();
  }

  ngOnInit() {
  }

}
