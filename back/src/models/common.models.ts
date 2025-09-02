export interface Score {
    team_id: number;
    points: number;
}

export const SCORE_SCHEMA: Record<keyof Score, any> = {
    team_id: 0,
    points: 0
}
