import { SchemaType } from "@/shared/utils/common/Transform";

export interface Team {
    id: number;
    name: string;
    color: string;
}

export const TEAM_SCHEMA: SchemaType<Team> = {
    id: 0,
    name: "",
    color: ""
}
