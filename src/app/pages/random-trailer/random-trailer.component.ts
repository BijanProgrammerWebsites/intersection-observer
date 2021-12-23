import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-random-trailer',
    templateUrl: './random-trailer.component.html',
    styleUrls: ['./random-trailer.component.scss'],
})
export class RandomTrailerComponent implements AfterViewInit {
    @ViewChild('body') private body!: ElementRef;

    private observer!: IntersectionObserver;

    public ngAfterViewInit(): void {
        this.main();
    }

    private main(): void {
        this.observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    const element: HTMLElement | null = (entry.target as HTMLElement).querySelector('h2');
                    if (!element || !entry.isIntersecting) return;

                    const intersectionRatio = Math.min(1, entry.intersectionRatio + 0.1);

                    element.style.transform = `scale(${0.5 + intersectionRatio / 2})`;
                    element.style.opacity = intersectionRatio.toString();
                });
            },
            {
                threshold: Array(100)
                    .fill(0)
                    .map((_, i) => (i + 1) / 100),
            }
        );

        const sections: HTMLElement[] = Array.from(this.body.nativeElement.querySelectorAll('section'));
        sections.forEach((section) => {
            this.observer.observe(section);
        });
    }
}
