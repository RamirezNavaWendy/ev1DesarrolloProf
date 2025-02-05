import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-examen',
  imports: [FormsModule],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  title = 'examenP1';
  // Propiedades
  producto = {
    id: 0,
    nombre:'',
    descripcion: '',
    precio: 0,
    lugar: '',
    material: '',
    categoria: ''
  };

  listaProductos = [
    { id: 1, nombre: 'Cruz de Cristal', descripcion: 'Antigua cruz de cristal, utilizada en rituales religiosos', lugar: 'Egipto', material: 'Cristal', categoria: 'Religión', precio: 1500.00 },
    { id: 2, nombre: 'Máscara Azteca', descripcion: 'Máscara ceremonial de los antiguos aztecas, hecha de jade y oro', lugar: 'México', material: 'Jade, oro', categoria: 'Cultura', precio: 3000.99 },
    { id: 3, nombre: 'Espada Samurai', descripcion: 'Espada japonesa forjada a mano, usada por samuráis en batallas', lugar: 'Japón', material: 'Acero', categoria: 'Militar', precio: 4500.00 },
    { id: 4, nombre: 'Cáliz Medieval', descripcion: 'Cáliz medieval de plata, usado en banquetes reales', lugar: 'Francia', material: 'Plata', categoria: 'Historia', precio: 1200.00 },
    { id: 5, nombre: 'Cinturón Vikingos', descripcion: 'Cinturón de cuero con adornos metálicos, usado por guerreros vikingos', lugar: 'Escandinavia', material: 'Cuero, hierro', categoria: 'Militar', precio: 750.00 }
  ];  

  // Función para agregar un producto al arreglo
  agregarProducto() {
    if (this.producto.id == 0) {
      alert('El ID del producto no puede ser CERO');
      return;
    }
    // Verificar que el ID no exista
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        alert('Ya existe un producto con el ID');
        return;
      }
    }
    // Damos de alta el producto
    this.listaProductos.push({
      id: this.producto.id,
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      lugar: this.producto.lugar,
      material: this.producto.material,
      categoria: this.producto.categoria,
      precio: this.producto.precio
    });

    // Resetear el objeto producto
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
    this.producto.lugar = '';
    this.producto.material = '';
    this.producto.categoria = '';
  }

  // Función para seleccionar un producto de la tabla
  seleccionarProducto(productoSeleccionado: { id: number; nombre: string; descripcion: string; lugar: string; material: string; categoria: string; precio: number }) {
    this.producto.id = productoSeleccionado.id;
    this.producto.nombre = productoSeleccionado.nombre;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.lugar = productoSeleccionado.lugar;
    this.producto.material = productoSeleccionado.material;
    this.producto.categoria = productoSeleccionado.categoria;
    this.producto.precio = productoSeleccionado.precio;
  }

  // Función para modificar un producto existente
  modificarProducto() {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        this.listaProductos[i].nombre = this.producto.nombre;
        this.listaProductos[i].descripcion = this.producto.descripcion;
        this.listaProductos[i].lugar = this.producto.lugar;
        this.listaProductos[i].material = this.producto.material;
        this.listaProductos[i].categoria = this.producto.categoria;
        this.listaProductos[i].precio = this.producto.precio;

        // Resetear el objeto producto
        this.producto.id = 0;
        this.producto.nombre = '';
        this.producto.descripcion = '';
        this.producto.precio = 0;
        this.producto.lugar = '';
        this.producto.material = '';
        this.producto.categoria = '';
        return;
      }
    }
    alert('No existe ese ID');
  }

  // Función para eliminar un producto de la tabla
  eliminarProducto(id: number) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (id == this.listaProductos[i].id) {
        this.listaProductos.splice(i, 1);
        return;
      }
    }
  }
}
