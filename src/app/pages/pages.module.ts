import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home/home.component';

import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';
import {RouterModule} from '@angular/router';
import {RandomTrailerComponent} from './random-trailer/random-trailer.component';
import {TextMarkerComponent} from './text-marker/text-marker.component';

@NgModule({
    declarations: [HomeComponent, RandomTrailerComponent, TextMarkerComponent],
    imports: [CommonModule, PipesModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
