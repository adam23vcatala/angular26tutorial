import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  userList: any[] = [];
  http = inject(HttpClient);
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": "",
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/GetAllUsers").subscribe((res:any) => {
      this.userList = res;
    });
  }
  // Aquesta funció s'executarà quan fem clic al botó de guardar usuari, i enviarà les dades del formulari a l'API per crear un nou usuari
  onSaveUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next:(result) => { // <-- Si la resposta de l'API és correcta, mostrem un missatge d'èxit i recarreguem la llista d'usuaris per mostrar el nou usuari creat
        debugger;  //<!-- Aquesta línia és per posar un breakpoint i poder veure la resposta de l'API al navegador -->
        alert("User created successfully");
        this.getUsers(); // <-- Després de crear l'usuari, tornem a carregar la llista d'usuaris per mostrar el nou usuari creat
      },
      error:(error) => { //<-- Si hi ha un error en la resposta de l'API, mostrem un missatge d'error -->
        debugger;
        alert("Error " + error);
      }
    })
  }
}
