import { SchemaType } from "@/utils/transfom";

export interface Score {
    team_id: number;
    points: number;
}

export const SCORE_SCHEMA: SchemaType<Score> = {
    team_id: 0,
    points: 0
}
