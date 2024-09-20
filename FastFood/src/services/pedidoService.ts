import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido'; // Asegúrate de importar la interfaz

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() {}

   toString(pedido : Pedido){
    return "Número: " + pedido.number + ", Pedido de: " + pedido.name + ", Orden: " + pedido.description;
  }
}