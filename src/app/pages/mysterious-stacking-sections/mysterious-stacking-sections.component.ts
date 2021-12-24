import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-mysterious-stacking-sections',
    templateUrl: './mysterious-stacking-sections.component.html',
    styleUrls: ['./mysterious-stacking-sections.component.scss'],
})
export class MysteriousStackingSectionsComponent implements AfterViewInit {
    public Array = Array;

    @ViewChild('body') private body!: ElementRef;

    private observer!: IntersectionObserver;

    public ngAfterViewInit(): void {
        this.main();
    }

    private main(): void {
        this.observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    const element: HTMLElement | null = entry.target as HTMLElement;
                    if (!element) return;

                    const show = entry.isIntersecting && entry.intersectionRatio >= 0.6;

                    element.classList.toggle('fade-in', show);
                    element.classList.toggle('fade-out', !show);
                });
            },
            {
                threshold: [0.4, 0.6],
            }
        );

        const sections: HTMLElement[] = Array.from(this.body.nativeElement.querySelectorAll('section'));
        sections.forEach((section) => {
            this.observer.observe(section);
        });
    }
}
