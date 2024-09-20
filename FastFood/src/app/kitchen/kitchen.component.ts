import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from '../../interfaces/pedido';
import { PedidoService } from '../../services/pedidoService';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit{
  @Input() lPedidos : Pedido[] = [];
  @Output() terminado = new EventEmitter<Pedido>();

   lPendiente : Pedido[] = [];
   pedidoCocinandose : any = null;

  constructor(private pedidoService : PedidoService){}

  ngOnInit(): void {
    this.lPendiente = this.lPedidos;
  }

  mostrarPedido(pedido : Pedido){
    return this.pedidoService.toString(pedido);
  }

  cocinar(pedido : Pedido){
    this.pedidoCocinandose = this.lPendiente.splice(this.lPendiente.indexOf(pedido), 1)[0];
  }

  terminar(){
    let pedido = this.pedidoCocinandose;
    this.terminado.emit(pedido);
    this.pedidoCocinandose = null;
  }
}
