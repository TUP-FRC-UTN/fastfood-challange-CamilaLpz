import { Component, Input } from '@angular/core';
import { Pedido } from '../../interfaces/pedido';
import { PedidoService } from '../../services/pedidoService';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  @Input() lEntregados : Pedido[] = [];

  constructor(private pedidoService : PedidoService){}

  mostrarPedido(pedido : Pedido){
    return this.pedidoService.toString(pedido);
  }
  entregar(pedido : Pedido){
    alert(`Pedido nro ${pedido.number} entregado!`)
    this.lEntregados.splice(this.lEntregados.indexOf(pedido), 1);
   }
}
