export interface Team {
    id: number;
    name: string;
    color: string;
}

export const TEAM_SCHEMA: Record<keyof Team, any> = {
    id: 0,
    name: "",
    color: ""
}
