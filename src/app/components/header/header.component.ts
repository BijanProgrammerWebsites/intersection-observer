import {Component} from '@angular/core';
import {Theme} from 'src/app/models/theme';
import {ThemeService} from '../../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public Theme = Theme;

    public constructor(public themeService: ThemeService) {}
}
