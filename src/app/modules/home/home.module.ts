import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoComponent } from './info/info.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AnonymizedPipe } from "./info/pipe/anonymized.pipe";

@NgModule({
  declarations: [
    CadastroComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AnonymizedPipe
]
})
export class HomeModule { }
