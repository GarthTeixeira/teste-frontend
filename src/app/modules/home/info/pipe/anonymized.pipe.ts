import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anonymized',
  standalone: true
})
export class AnonymizedPipe implements PipeTransform {

  transform(item: any): string {
    if(item.anonimized)
      return "*".repeat(item.value.length)
    return item.value;
  }

}
