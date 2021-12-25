import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionService} from '../../services/intersection.service';

@Component({
    selector: 'app-parallax-header',
    templateUrl: './parallax-header.component.html',
    styleUrls: ['./parallax-header.component.scss'],
})
export class ParallaxHeaderComponent implements AfterViewInit {
    public Array = Array;

    @ViewChild('body') private body!: ElementRef;

    private observer!: IntersectionObserver;

    public ngAfterViewInit(): void {
        this.main();
    }

    private main(): void {
        this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const headerElement: HTMLElement | null = entry.target as HTMLElement;
                const fixedElement: HTMLElement | null = headerElement.querySelector('.fixed');
                if (!headerElement || !fixedElement) return;

                const vh = (entry.intersectionRatio - 1) * 100;

                headerElement.style.setProperty('--position-y', `${vh}vh`);
                fixedElement.style.setProperty('--translate-y', `calc(-50% + ${0.8 * vh}vh)`);
            });
        }, IntersectionService.thresholdOptions(10));

        const fixed: HTMLElement = this.body.nativeElement.querySelector('header');
        this.observer.observe(fixed);
    }
}
