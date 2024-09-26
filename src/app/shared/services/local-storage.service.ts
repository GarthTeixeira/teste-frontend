// local-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {
  constructor() { }

  setItem(key: string, data: T): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error(`Erro no salvamento para chave ${key}: ${error}`);
    }
  }

  getItem(key: string): T | null {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
      try {
        return JSON.parse(serializedData);
      } catch (error) {
        console.error(`Error da recuperação do dado para chave ${key}: ${error}`);
      }
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}