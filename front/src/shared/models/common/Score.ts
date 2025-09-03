import { SchemaType } from "@/shared/utils/common/Transform";

export interface Score {
    team_id: number;
    points: number;
}

export const SCORE_SCHEMA: SchemaType<Score> = {
    team_id: 0,
    points: 0
}
