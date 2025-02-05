import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-3',
  imports: [FormsModule],
  templateUrl: './ejemplo-3.component.html',
  styleUrl: './ejemplo-3.component.css'
})
export class Ejemplo3Component {
  title = 'ejemplo3';

  //propiedades
  producto = {
    id:0,
    descripcion:'',
    precio:0
  }

  listaProductos = [
    {id:1, descripcion:'Playera',precio:150.00},
    {id:2, descripcion:'Pantalon',precio:399.99},
    {id:3, descripcion:'Falda',precio:300.00},
    {id:4, descripcion:'Vestido',precio:560.00},
    {id:5, descripcion:'Short',precio:199.99}, 
  ];

  //funcion para agregar un producto al arreglo
  agregarProducto(){
    if(this.producto.id == 0){
      alert('El ID del producto no puede ser CERO');
      return;
    }
    //verificar que el ID no exista
    for(let i=0;i<this.listaProductos.length;i++){
      if(this.producto.id==this.listaProductos[i].id){
        alert('Ya existe un producto con el ID');
        return;
      }
    }
    //damos de alta el producto
    this.listaProductos.push({
      id:this.producto.id,
      descripcion:this.producto.descripcion,
      precio:this.producto.precio
    });

    //resetear el objeto producto
    this.producto.id=0;
    this.producto.descripcion='';
    this.producto.precio=0;
  }
  //funcion para seleccionar un producto de la tabla
  seleccionarProducto(
    productoSeleccionado:{id:number;descripcion:string;precio:number}){
      this.producto.id=productoSeleccionado.id;
      this.producto.descripcion=productoSeleccionado.descripcion;
      this.producto.precio=productoSeleccionado.precio;
    }
  //funcion para seleccionar un producto existente
  modificarProduto(){
    for(let i=0; i< this.listaProductos.length;i++){
      if(this.producto.id==this.listaProductos[i].id){
        this.listaProductos[i].descripcion=this.producto.descripcion;
        this.listaProductos[i].precio=this.producto.precio;

        this.producto.id=0;
        this.producto.descripcion='';
        this.producto.precio=0;
        return;
      }
    }
    alert('No existe ese ID');
  }
  //funcion para eliminar un producto de la tabla
  eliminarProducto(id:number){
    for(let i=0; i< this.listaProductos.length;i++){
      if(id==this.listaProductos[i].id){
        this.listaProductos.splice(i,1);
        return;
      }
    }

  }
}
