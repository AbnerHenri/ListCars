import { CarroService } from './services/carro.service';
import { Component, OnInit } from '@angular/core';

import { ICarro } from './interfaces/ICarro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listCars: any;

  constructor(private carroService: CarroService) {}
  ngOnInit(): void {
    this.listingCars();
  }

  listingCars() {
    this.carroService.getCars().subscribe((data) => {
      this.listCars = data;
      console.log(this.listCars);
    });
  }
}
