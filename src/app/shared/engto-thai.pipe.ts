import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'engtoThai'
})
export class EngtoThaiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const curdate = new Date(value);
    return `${curdate.getDate()} ${months[curdate.getMonth()]} ${curdate.getFullYear() + 543}`;
  }
}
