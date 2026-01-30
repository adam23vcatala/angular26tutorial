import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  // Atributo para controlar la visibilidad de un párrafo
  isParaVisible: boolean = true;
  // Atributo para controlar el mes que usamos
  startMonthName: String = "feb"

  // Método para mostrar el párrafo
  showP() {
    this.isParaVisible = true;
  }

  // Método para ocultar el párrafo
  hideP() {
    this.isParaVisible = false;
  }
  //Array de elementos.
  citList: string[] = ["Pune", "Mumbai", "Panji", "Nagpur"];

  //Array de objetos
    studentList: any [] = [
        {name: 'AAAA', city: 'Pune', isActive: false},
        {name: 'BBB', city: 'Mumbai', isActive: false},
        {name: 'CCC', city: 'Pune', isActive: true},
        {name: 'DDD', city: 'Nagpur', isActive: false},

    ]
}
