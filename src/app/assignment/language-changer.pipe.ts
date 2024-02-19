import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageChanger',
})
export class LanguageChangerPipe implements PipeTransform {
  transform(value: { nameGeo: string; nameEng: string }): string {
    if (localStorage['languageCode'] === 'geo') {
      return value.nameGeo;
    }
    return value.nameEng;
  }
}
