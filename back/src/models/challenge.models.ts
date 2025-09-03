import { SchemaType } from "@/utils/transfom";

export interface Challenge {
    id: number;
    title: string;
    description?: string;
    points: number;
    max_done: number;
    done: Map<string, number>;
}

export const CHALLENGE_SCHEMA: SchemaType<Challenge> = {
    id: 0,
    title: "",
    description: "",
    points: 0,
    max_done: 0,
    done: new Map<string, number>()
}
