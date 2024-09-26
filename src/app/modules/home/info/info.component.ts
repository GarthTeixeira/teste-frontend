import { Component } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { CadastroLocalStorage } from '../../../shared/models/cadastro.model';
import { InfoDict, translations } from '../../../shared/enums/info-dict';

/**
 * Nesta parte do código utilizei métodos mais complexos, no intuito de deixar essa parte escalável nas informações
 * Ao adicionar um campo no dicionário localizado no enum importado, automaticamente a informação nova aparecerá.
 * 
 * Caso não deseje que uma informação não seja exibida, adicionar o campo em informacoesNaoExibidas
 * 
 * Adicionei uma feature para anonimizar dados caso seja necessário, para os campos que quiser anonimizar,
 * certifiqui-ce que se encontra no vertor de campos informacoesAnonimizadas. 
 */



@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  
  informacoes:CadastroLocalStorage | undefined

  informacoesNaoExibidas = ['id'];

  informacoesAnonimizadas = ['password']

  infoMap:{key:string, value:string | any, anonimized:boolean}[] = []

  constructor(localStorageService:LocalStorageService<CadastroLocalStorage[]>){
    const itens = localStorageService.getItem("itens")
    this.informacoes = itens? itens[itens?.length-1] : undefined

    for (const keyOfInfo in this.informacoes){

      if (!this.informacoesNaoExibidas.includes(keyOfInfo)) {
        this.infoMap.push({
          key: this.getTranslation(keyOfInfo),
          value: this.informacoes[keyOfInfo],
          anonimized: this.informacoesAnonimizadas.includes(keyOfInfo)
        })
      }

    }

    console.log(this.infoMap)
  }

  getTranslation(word: string): string {
    const upper = word.toUpperCase()
    const key = InfoDict[upper as keyof typeof InfoDict];
    return key ? translations[key] : 'Tradução não encontrada';
  }
}
