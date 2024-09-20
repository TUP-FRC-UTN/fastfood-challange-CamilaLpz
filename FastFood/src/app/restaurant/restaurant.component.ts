import { Component, Input } from '@angular/core';
import { PosComponent } from '../pos/pos.component';
import { Pedido } from '../../interfaces/pedido';
import { PedidoService } from '../../services/pedidoService';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  constructor(private pedidoService: PedidoService) {}

  lPedidosIngresados : Pedido[] = [];
  lPedidos : Pedido[] = [];
  lPedidosEntrega : Pedido[] = [];

 agregarPedido(nuevo : Pedido){
  this.lPedidosIngresados.push(nuevo);
  this.lPedidos.push(nuevo);
 }

 mostrarPedido(pedido : Pedido){
  return this.pedidoService.toString(pedido);
 }
 agregarEntrega(pedido : Pedido){
  this.lPedidosEntrega.push(pedido);
 }


}
