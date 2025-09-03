import { SchemaType } from "@/shared/utils/common/Transform";

export interface Record {
    team_id: number;
    team_num: number;
    room_id: number;
    slot_id: number;
    points: number;
    bonus: number;
    comment: string;
}

export const RECORD_SCHEMA: SchemaType<Record> = {
    team_id: 0,
    team_num: 0,
    room_id: 0,
    slot_id: 0,
    points: 0,
    bonus: 0,
    comment: ""
}
