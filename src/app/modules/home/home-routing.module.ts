import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoComponent } from './info/info.component'

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}