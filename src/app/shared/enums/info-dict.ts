//Caso exista a necessidade de mais campos, adicionar ao dicionário

export enum InfoDict {
    ID= 'ID',
    NAME = 'NAME',
    EMAIL = 'EMAIL',
    PASSWORD = 'PASSWORD' 
}

export const translations: { [key in InfoDict]: string } = {
    [InfoDict.ID]: 'Indentificador',
    [InfoDict.NAME]: 'Nome',
    [InfoDict.EMAIL]: 'E-mail',
    [InfoDict.PASSWORD]: 'Senha'
  };