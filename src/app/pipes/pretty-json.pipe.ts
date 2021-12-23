import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'prettyJson',
})
export class PrettyJsonPipe implements PipeTransform {
    public transform(value: any): string {
        let result = JSON.stringify(value, null, 4);
        result = result.replace('\n', '<br/>');

        return result;
    }
}
