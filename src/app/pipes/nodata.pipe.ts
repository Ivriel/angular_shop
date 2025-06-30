import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodata'
})
export class NodataPipe implements PipeTransform {

  transform(value: any, fallback:string='No Data'): string{
    return value ? value : fallback; // ada value? kalau ada kasih value asli  kalau gada kasih teks dari fallback
  }

}
