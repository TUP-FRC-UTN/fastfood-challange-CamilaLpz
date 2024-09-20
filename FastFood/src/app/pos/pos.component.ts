import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../interfaces/pedido';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  @Output() crearPedido = new EventEmitter<Pedido>();

  nuevoPedido : Pedido ={
    name : "",
    description : "",
    number : Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    date : new Date()
  }

  validar(form : any){
    if(form.valid){
      this.crearPedido.emit(this.nuevo(form))
      form.reset();
    }
  }

  nuevo(form : any){
    let pedido : Pedido = {
      name : form.value.nombre,
      number : Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      description : form.value.pedido,
      date : new Date()
    }
    return pedido;
  }
}
