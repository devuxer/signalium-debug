import { atom } from "jotai";

export function createMenuState() {
    const rawAnchorElAtom = atom<HTMLElement | null>(null);
    const anchorElAtom = atom(get => get(rawAnchorElAtom));
    const canShowAtom = atom(get => !!get(anchorElAtom));

    const openAtom = atom(null, (_get, set, anchorEl: HTMLElement) => {
        set(rawAnchorElAtom, anchorEl);
    });

    const closeAtom = atom(null, (_get, set) => {
        set(rawAnchorElAtom, null);
    });

    return { anchorElAtom: anchorElAtom, canShowAtom: canShowAtom, openAtom, closeAtom };
}
