import { SchemaType } from "@/utils/transfom";

export interface Room {
    id: number;
    value: string;
}

export const ROOM_SCHEMA: SchemaType<Room> = {
    id: 0,
    value: ""
}
