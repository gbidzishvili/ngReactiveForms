import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs';

@Pipe({
  name: 'textShortener',
})
export class TextShortenerPipe implements PipeTransform {
  transform(value: string, maxSymbols: number): string {
    console.log(value.length, maxSymbols);
    if (value.length <= maxSymbols) return value;
    return value.slice(0, maxSymbols) + '...';
  }
}
