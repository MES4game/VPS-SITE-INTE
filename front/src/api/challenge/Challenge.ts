import { Challenge } from "@/shared/models/challenge/Challenge";

const CHALLENGES: Challenge[] = [
    { id: 1, title: 'challenge 1', description: '> testing\n\n`react`\n\n__with__\n\n_markdown_', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 2, title: 'challenge 2', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 3, title: 'challenge 3', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 4, title: 'challenge 4', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 5, title: 'challenge 5', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 6, title: 'challenge 6', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 7, title: 'challenge 7', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 8, title: 'challenge 8', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 9, title: 'challenge 9', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 10, title: 'challenge 10', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 11, title: 'challenge 11', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 12, title: 'challenge 12', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 13, title: 'challenge 13', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 14, title: 'challenge 14', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) },
    { id: 15, title: 'challenge 15', description: '', points: 0, max_done: 0, done: new Map<string, number>(Object.entries(JSON.parse('{ "1": 0, "2": 0, "3": 0, "4": 0 }') as Record<string, number>)) }
]

export async function getChallenges(): Promise<Challenge[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return CHALLENGES;
}
