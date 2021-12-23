import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'list',
})
export class ListPipe implements PipeTransform {
    public transform(items: any[]): string {
        return items.join(' | ');
    }
}
