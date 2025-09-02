import { Team } from "@/shared/models/common/Team";

const TEAMS: Team[] = [
    { id: 1, name: 'ROUGE', color: 'red' },
    { id: 2, name: 'JAUNE', color: 'yellow' },
    { id: 3, name: 'VERT', color: 'green' },
    { id: 4, name: 'BLEUE', color: 'blue' }
];

export async function getTeams(): Promise<Team[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return TEAMS;
}
