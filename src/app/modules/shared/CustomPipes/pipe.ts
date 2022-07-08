import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'getTime' })
export class GetTimePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return `${date.getHours()} : ${date.getMinutes()}`;
  }
}
