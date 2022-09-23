import { Component } from '@angular/core';
import { MakeupService } from '../services/makeup.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  products: any;
  constructor(private MakeupService: MakeupService) {}
  ngOnInit() {
    this.MakeupService.getMakeup().subscribe((products) => {
      this.products = products;
    });
  }
}
