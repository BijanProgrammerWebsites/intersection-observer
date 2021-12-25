import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public demos: {title: string; link: string}[] = [
        {title: 'Random Trailer', link: 'random-trailer'},
        {title: 'Text Marker', link: 'text-marker'},
        {title: 'Mysterious Stacking Sections', link: 'mysterious-stacking-sections'},
        {title: 'Parallax Header', link: 'parallax-header'},
        {title: 'Rainbow Tiles', link: 'rainbow-tiles'},
    ];
}
