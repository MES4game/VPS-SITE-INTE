export interface Challenge {
    id: number;
    title: string;
    description?: string;
    points: number;
    max_done: number;
    done: Map<string, number>;
}

export const CHALLENGE_SCHEMA: Record<keyof Challenge, any> = {
    id: 0,
    title: "",
    description: "",
    points: 0,
    max_done: 0,
    done: {}
}
