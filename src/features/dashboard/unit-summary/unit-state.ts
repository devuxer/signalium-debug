import type { UnitType } from "@/common/enums";

export type UnitState = ReturnType<typeof createUnitState>;

export function createUnitState(type: UnitType, code: string, name: string) {
    return { type, code, name };
}
