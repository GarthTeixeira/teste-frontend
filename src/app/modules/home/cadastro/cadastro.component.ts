import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  profileForm: FormGroup 
  
  constructor(private fb:FormBuilder){
    this.profileForm = this.fb.group( {
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      senha:['',[Validators.required]]
    })
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit(){

  }
}
