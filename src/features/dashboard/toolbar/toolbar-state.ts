import { atom } from "jotai";
import { createMenuState } from "@/common/signal-helpers";

export type SortDirection = "Ascending" | "Descending";

export const sortDirectionAtom = atom<SortDirection>("Ascending");

export const sortMenuState = createMenuState();
