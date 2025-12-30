import { reactive } from "signalium";
import { compareStrings, compareStringsReverse } from "@/common/comparers";
import { sortDirection } from "./toolbar/toolbar-state";
import { createUnitState } from "./unit-summary/unit-state";

const rawUnitStates = [
    createUnitState("Foo", "ABC", "Alpha Bravo Chalie"),
    createUnitState("Foo", "HOP", "Hotel Oscar Papa"),
    createUnitState("Bar", "KID", "Kilo India Delta"),
    createUnitState("Bar", "PIN", "Papa India November"),
    createUnitState("Baz", "STA", "Sierra Tango Alpha"),
];

export const unitStates = reactive(() =>
    rawUnitStates.toSorted(
        sortDirection.value === "Ascending" ? compareStrings(x => x.name) : compareStringsReverse(x => x.name),
    ),
);
