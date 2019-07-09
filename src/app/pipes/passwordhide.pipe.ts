import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordhide'
})
export class PasswordhidePipe implements PipeTransform {

  transform(value: string, active: boolean): any {
    if (active) {
      // padStart no es compatible con todos los exploradores
      return ''.padStart(value.length , '*');
    } else {
      return value;
    }
  }

}
