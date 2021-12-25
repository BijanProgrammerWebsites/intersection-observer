import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-chameleon-gallery',
    templateUrl: './chameleon-gallery.component.html',
    styleUrls: ['./chameleon-gallery.component.scss'],
})
export class ChameleonGalleryComponent implements AfterViewInit {
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

                    const isVisible = entry.intersectionRatio >= 0.2;
                    const isLeaving = element.classList.contains('fade-in') && entry.intersectionRatio <= 0.8;
                    const isIntersecting = isVisible && !isLeaving;

                    element.classList.toggle('fade-in', isIntersecting);
                    element.classList.toggle('fade-out', !isIntersecting);

                    this.updateBackgroundColor();
                });
            },
            {
                rootMargin: '0px 0px 0px 0px',
                threshold: [0.2, 0.8],
            }
        );

        const images: HTMLElement[] = Array.from(this.body.nativeElement.querySelectorAll('img'));
        images.forEach((image) => {
            this.observer.observe(image);
        });
    }

    private updateBackgroundColor(): void {
        const image = this.body.nativeElement.querySelector('img.fade-in');
        (this.body.nativeElement as HTMLElement).style.backgroundColor = image
            ? image.getAttribute('data-color')
            : 'transparent';
    }
}
