import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugPipe'
})
export class SlugPipePipe implements PipeTransform {

  transform(str: string): string {
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-')   // Replace multiple - with single -
      .replace(/^-+/, '')       // Trim - from start of text
      .replace(/-+$/, '');
  }

}
