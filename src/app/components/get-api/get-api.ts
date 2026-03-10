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
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/GetAllUsers").subscribe((res:any) => {
      this.userList = res;
    });
  }
}