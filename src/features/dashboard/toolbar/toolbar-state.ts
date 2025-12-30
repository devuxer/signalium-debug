import { signal } from "signalium";
import { createMenuState } from "@/common/signal-helpers";

export type SortDirection = "Ascending" | "Descending";

export const sortDirection = signal<SortDirection>("Ascending");

export const brokenSortMenuState = createMenuState();
