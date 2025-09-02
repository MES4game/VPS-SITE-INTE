export interface Room {
    id: number;
    name: string;
}

export const ROOM_SCHEMA: Record<keyof Room, any> = {
    id: 0,
    name: ""
}
