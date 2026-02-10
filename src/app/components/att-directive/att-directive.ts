import { Component } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  isDiv2Green: boolean = false;

    constructor() {
        console.log('Constructor: AttDirective component is being created');
    }

    ngOnInit(): void {
    console.log('ngOnInit: AttDirective component has been initialized');
    //Se ejecuta una vez, cuando el componente se ha creado y se han inicializado sus propiedades. Es un buen lugar para realizar tareas de inicialización, como cargar datos desde un servidor o configurar el estado inicial del componente.
    //Se usa para: -cargar datos, -llamar a una api, -inicializar variables, -configurar suscripciones a observables, -realizar tareas de configuración que solo necesitan hacerse una vez durante el ciclo de vida del componente.
    //Resumen: “Aquí preparo todo”
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: AttDirective component content has been initialized');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: AttDirective component content has been checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: AttDirective component view has been initialized');
    //Se ejecuta una vez, después de que Angular haya inicializado completamente la vista del componente (el template htmol) y sus vistas hijas. Es un buen lugar para realizar tareas que dependen de la vista, como acceder a elementos del DOM o configurar interacciones con la interfaz de usuario.
    //Se usa para: -acceder a elementos del DOM, -configurar interacciones con la interfaz de usuario, -inicializar bibliotecas de terceros que requieren acceso a la vista, -realizar tareas de configuración que dependen de la vista del componente.
    //Resumen: “Aquí preparo todo lo que depende de la vista, puedo tocar el HTML”

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: AttDirective component view has been checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: AttDirective component is being destroyed');
    //Se ejecuta justo antes de desaparecer el componente, es decir, cuando Angular va a destruirlo.
    //Se usa para: -limpiar recursos, -cancelar suscripciones a observables, -detener timers, -liberar memoria, -realizar cualquier tarea de limpieza necesaria para evitar fugas de memoria o comportamientos inesperados después de que el componente haya sido destruido.
    //Resumen: “Aquí limpio todo”
  }
}
