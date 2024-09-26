import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { validateEmail, validatePassword } from '../../../shared/validators';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { CadastroLocalStorage } from '../../../shared/models/cadastro.model';


@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  profileForm: FormGroup 
  
  constructor(
    private fb:FormBuilder,
    private localStorageService:LocalStorageService<CadastroLocalStorage[]>,
    private router:Router
  ){
    this.profileForm = this.fb.group( {
      name:['',[Validators.required]],
      email:['',[Validators.required, validateEmail]],
      senha:['',[Validators.required, validatePassword]]
    })
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit(){
    try {
      let itens = this.localStorageService.getItem("itens")
      
      if (!itens)
        itens = []

      const novoCadastro =
      {
        id:itens.length,
        name:this.profileForm.controls['name'].value,
        email:this.profileForm.controls['email'].value,
        password:this.profileForm.controls['senha'].value
      }

      itens.push(novoCadastro)
      this.localStorageService.setItem("itens",itens)
      this.router.navigate(['/home/info'])

      window.alert("Salvo no local storage")
    } catch (error) {
      window.alert("Algo inesperado aconteceu")
    }
    
  }
}
