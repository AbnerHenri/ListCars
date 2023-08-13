import { Component } from '@angular/core';

import { ICarro } from 'src/app/interfaces/ICarro';
import { CarroService } from './../../services/carro.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private carroService: CarroService) {}

  carro: ICarro = {
    id: 0,
    nome: '',
    marca: '',
    ano: 0,
    dono: '',
  };

  adicionarCarro(carro: ICarro) {
    this.carroService.addCar(carro).subscribe(() => {
      location.reload();
    });
  }
}
