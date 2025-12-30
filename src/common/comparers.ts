export function compareBooleansReverse(a: boolean, b: boolean): 0 | 1 | -1;
export function compareBooleansReverse<TItem>(
    valueGetter: (item: TItem) => boolean,
): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareBooleansReverse<TItem>(aOrValueGetter: boolean | ((item: TItem) => boolean), b?: boolean) {
    if (typeof aOrValueGetter === "boolean") return compareBooleansCore(b || false, aOrValueGetter);
    return (itemA: TItem, itemB: TItem) => compareBooleansCore(aOrValueGetter(itemB), aOrValueGetter(itemA));
}

export function compareBooleans(a: boolean, b: boolean): 0 | 1 | -1;
export function compareBooleans<TItem>(valueGetter: (item: TItem) => boolean): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareBooleans<TItem>(aOrValueGetter: boolean | ((item: TItem) => boolean), b?: boolean) {
    if (typeof aOrValueGetter === "boolean") return compareBooleansCore(aOrValueGetter, b || false);
    return (itemA: TItem, itemB: TItem) => compareBooleansCore(aOrValueGetter(itemA), aOrValueGetter(itemB));
}
function compareBooleansCore(a: boolean, b: boolean) {
    if (a === b) return 0;
    return a ? -1 : 1;
}

export function compareNumbersReverse(a: number | null | undefined, b: number | null | undefined): 0 | 1 | -1;
export function compareNumbersReverse<TItem>(
    valueGetter: (item: TItem) => number | null | undefined,
): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareNumbersReverse<TItem>(
    aOrValueGetter: number | null | undefined | ((item: TItem) => number | null | undefined),
    b?: number | null | undefined,
) {
    if (isMaybeNumber(aOrValueGetter)) return compare(aOrValueGetter, b);
    return (itemA: TItem, itemB: TItem) => compare(aOrValueGetter(itemA), aOrValueGetter(itemB));

    function compare(itemA: number | null | undefined, itemB: number | null | undefined) {
        if ((itemA || itemA === 0) && (itemB || itemB === 0)) return itemB - itemA;
        if (!itemA && itemA !== 0 && !itemB && itemB !== 0) return 0;
        return itemA || itemA === 0 ? -1 : 1;
    }
}

export function compareNumbers(a: number | null | undefined, b: number | null | undefined): 0 | 1 | -1;
export function compareNumbers<TItem>(
    valueGetter: (item: TItem) => number | null | undefined,
): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareNumbers<TItem>(
    aOrValueGetter: number | null | undefined | ((item: TItem) => number | null | undefined),
    b?: number | null | undefined,
) {
    if (isMaybeNumber(aOrValueGetter)) return compare(aOrValueGetter, b);
    return (itemA: TItem, itemB: TItem) => compare(aOrValueGetter(itemA), aOrValueGetter(itemB));

    function compare(itemA: number | null | undefined, itemB: number | null | undefined) {
        if ((itemA || itemA === 0) && (itemB || itemB === 0)) return itemA - itemB;
        if (!itemA && itemA !== 0 && !itemB && itemB !== 0) return 0;
        return itemA || itemA === 0 ? -1 : 1;
    }
}

export function compareStringsReverse(a: string | null | undefined, b: string | null | undefined): 0 | 1 | -1;
export function compareStringsReverse<TItem>(
    valueGetter: (item: TItem) => string | null | undefined,
): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareStringsReverse<TItem>(
    aOrValueGetter: string | null | undefined | ((item: TItem) => string | null | undefined),
    b?: string | null | undefined,
) {
    if (isMaybeString(aOrValueGetter)) return compare(aOrValueGetter, b);
    return (itemA: TItem, itemB: TItem) => compare(aOrValueGetter(itemA), aOrValueGetter(itemB));

    function compare(itemA: string | null | undefined, itemB: string | null | undefined) {
        if (itemA && itemB) return itemB.localeCompare(itemA);
        if (!itemA && !itemB) return 0;
        return itemA ? -1 : 1;
    }
}

export function compareStrings(a: string | null | undefined, b: string | null | undefined): 0 | 1 | -1;
export function compareStrings<TItem>(
    valueGetter: (item: TItem) => string | null | undefined,
): (a: TItem, b: TItem) => 0 | 1 | -1;
export function compareStrings<TItem>(
    aOrValueGetter: string | null | undefined | ((item: TItem) => string | null | undefined),
    b?: string | null | undefined,
) {
    if (isMaybeString(aOrValueGetter)) return compare(aOrValueGetter, b);
    return (itemA: TItem, itemB: TItem) => compare(aOrValueGetter(itemA), aOrValueGetter(itemB));

    function compare(itemA: string | null | undefined, itemB: string | null | undefined) {
        if (itemA && itemB) return itemA.localeCompare(itemB);
        if (!itemA && !itemB) return 0;
        return itemA ? -1 : 1;
    }
}

function isMaybeNumber(value: unknown): value is number | null | undefined {
    return value === null || value === undefined || typeof value === "number";
}

function isMaybeString(value: unknown): value is string | null | undefined {
    return value === null || value === undefined || (typeof value === "string" && value.trim().length > 0);
}
