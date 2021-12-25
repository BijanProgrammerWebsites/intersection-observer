import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-text-marker',
    templateUrl: './text-marker.component.html',
    styleUrls: ['./text-marker.component.scss'],
})
export class TextMarkerComponent implements AfterViewInit {
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
                    if (!element || !entry.isIntersecting) return;

                    element.classList.add('fade-in');

                    this.observer.unobserve(element);
                });
            },
            {
                rootMargin: '0px 0px -100px',
                threshold: 0,
            }
        );

        const marks: HTMLElement[] = Array.from(this.body.nativeElement.querySelectorAll('p mark'));
        marks.forEach((mark) => {
            this.observer.observe(mark);
        });
    }
}
