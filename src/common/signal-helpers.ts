import { reactive, signal } from "signalium";
import { useSignal } from "signalium/react";

export function useMenuState() {
    const rawAnchorEl = useSignal<HTMLElement | null>(null);
    const anchorEl = reactive(() => rawAnchorEl.value);
    const canShow = reactive(() => !!anchorEl());

    function open(element: HTMLElement) {
        rawAnchorEl.value = element;
    }

    function close() {
        rawAnchorEl.value = null;
    }

    return { anchorEl, canShow, open, close };
}

export function createMenuState() {
    const rawAnchorEl = signal<HTMLElement | null>(null);
    const anchorEl = reactive(() => rawAnchorEl.value);
    const canShow = reactive(() => !!anchorEl());

    return { anchorEl, canShow, open, close };

    function open(value: HTMLElement) {
        rawAnchorEl.value = value;
    }

    function close() {
        rawAnchorEl.value = null;
    }
}
