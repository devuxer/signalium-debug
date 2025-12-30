export const unitTypes = ["Foo", "Bar", "Baz"] as const;
export type UnitType = (typeof unitTypes)[number];
