import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customuppercase'
})
export class CustomuppercasePipe implements PipeTransform {

  transform(value: string, todas?: boolean): string {
    value = value.toLowerCase();
    const words = value.split(' ');
    if ( todas ) {
      for (const key in words) {
        if (words.hasOwnProperty(key)) {
          words[key] = words[key][0] + words[key][1].toUpperCase() + words[key][2].toUpperCase() + words[key].substr(3);
        }
      }
    } else {
      words[0] = words[0][0] + words[0][1].toUpperCase() + words[0][2].toUpperCase() + words[0].substr(3);
    }
    return words.join(' ');
  }

}
