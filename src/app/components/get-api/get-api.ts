import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})

//implementem la interfície OnInit per cridar a la funció getUsers() quan el component s'inicialitza
export class GetApi implements OnInit {

  http = inject(HttpClient);

  userList: any[] = [];
  todoList: any[] = [];  // <-- Afegim una nova variable per guardar la llista de tasques


  ngOnInit(): void {
    debugger;
    this.getUsers();
    this.getTodoItems(); // <-- Cridem a la funció getTodoItems() quan el component s'inicialitza
  }


  getUsers() {
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response:any) => {
      this.userList = response;
    });
  }


  getTodoItems() { //<-- Afegim la nova funció getTodoItems() que realitza una petició GET a l'API per obtenir una llista de tasques i guardar-la a la variable todoList
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((response:any) => {
      this.todoList = response;
    });
  }
}