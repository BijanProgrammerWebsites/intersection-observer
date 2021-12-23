export function toUniqueLetters(text: string): string[] {
    return [
        ...new Set(
            text
                .split('')
                .map((x) => x.trim())
                .filter(Boolean)
        ),
    ];
}
