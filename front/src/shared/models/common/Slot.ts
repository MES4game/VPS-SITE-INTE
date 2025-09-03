import { SchemaType } from "@/shared/utils/common/Transform";

export interface Slot {
    id: number;
    value: string;
}

export const SLOT_SCHEMA: SchemaType<Slot> = {
    id: 0,
    value: ""
}
