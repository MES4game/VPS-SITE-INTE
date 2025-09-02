export interface Slot {
    id: number;
    value: string;
}

export const SLOT_SCHEMA: Record<keyof Slot, any> = {
    id: 0,
    value: ""
}
