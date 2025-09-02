export interface Challenge {
    id: number;
    title: string;
    description?: string;
    points: number;
    max_done: number;
    done: Map<string, number>;
}
