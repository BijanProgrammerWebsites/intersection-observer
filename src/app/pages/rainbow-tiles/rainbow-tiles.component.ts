import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-rainbow-tiles',
    templateUrl: './rainbow-tiles.component.html',
    styleUrls: ['./rainbow-tiles.component.scss'],
})
export class RainbowTilesComponent implements AfterViewInit {
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
                    if (!element || !entry.isIntersecting) return;

                    element.classList.add('fade-in');
                    this.observer.unobserve(element);
                });
            },
            {threshold: 0.9}
        );

        const tiles: HTMLElement[] = Array.from(this.body.nativeElement.querySelectorAll('.tile'));
        tiles.forEach((tile) => {
            this.observer.observe(tile);
        });
    }
}
