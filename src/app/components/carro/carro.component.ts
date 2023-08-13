import { Component, OnInit, Input } from '@angular/core';
import { ICarro } from 'src/app/interfaces/ICarro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
})
export class CarroComponent implements OnInit {
  ngOnInit(): void {}

  @Input() car: ICarro = {
    id: 0,
    nome: '',
    marca: '',
    ano: 0,
    dono: '',
  };
}
