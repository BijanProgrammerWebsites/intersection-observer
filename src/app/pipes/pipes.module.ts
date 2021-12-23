import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPipe} from './list.pipe';
import {PrettyJsonPipe} from './pretty-json.pipe';

@NgModule({
    declarations: [ListPipe, PrettyJsonPipe],
    exports: [ListPipe, PrettyJsonPipe],
    imports: [CommonModule],
})
export class PipesModule {}
