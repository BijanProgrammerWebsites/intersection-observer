import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IntersectionService {
    public static readonly PERCENT_OPTIONS: IntersectionObserverInit = {
        threshold: Array(100)
            .fill(0)
            .map((_, i) => (i + 1) / 100),
    };
}
