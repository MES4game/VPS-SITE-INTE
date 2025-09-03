import { SchemaType } from "@/utils/transfom";

export interface Activity {
    id: number;
    title: string;
    description?: string;
}

export const ACTIVITY_SCHEMA: SchemaType<Activity> = {
    id: 0,
    title: "",
    description: ""
}

export interface Entry {
    team_id: number;
    team_num: number;
    room_id: number;
    slot_id: number;
    points: number;
    bonus: number;
    comment: string;
}

export const ENTRY_SCHEMA: SchemaType<Entry> = {
    team_id: 0,
    team_num: 0,
    room_id: 0,
    slot_id: 0,
    points: 0,
    bonus: 0,
    comment: ""
}
