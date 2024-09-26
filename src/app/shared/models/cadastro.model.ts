export interface CadastroLocalStorage {
    id:number,
    name:string,
    email:string,
    password: string,
    [key: string]: string | number;
  }