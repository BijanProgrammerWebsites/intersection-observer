import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {RandomTrailerComponent} from './pages/random-trailer/random-trailer.component';
import {TextMarkerComponent} from './pages/text-marker/text-marker.component';
import {MysteriousStackingSectionsComponent} from './pages/mysterious-stacking-sections/mysterious-stacking-sections.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'random-trailer', component: RandomTrailerComponent},
    {path: 'text-marker', component: TextMarkerComponent},
    {path: 'mysterious-stacking-sections', component: MysteriousStackingSectionsComponent},
    {path: '*', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
