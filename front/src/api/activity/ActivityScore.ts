import { Score } from "@/shared/models/common/Score";
import { getRandomNumber } from "@/shared/utils/common/Random";

interface ActivityScore extends Score {
    id: number
}

const SCORES: ActivityScore[] = [
    { id: 1, team_id: 1, points: getRandomNumber(0, 7*15*100) },
    { id: 1, team_id: 2, points: getRandomNumber(0, 7*15*100) },
    { id: 1, team_id: 3, points: getRandomNumber(0, 7*15*100) },
    { id: 1, team_id: 4, points: getRandomNumber(0, 7*15*100) },
    { id: 2, team_id: 1, points: getRandomNumber(0, 7*15*100) },
    { id: 2, team_id: 2, points: getRandomNumber(0, 7*15*100) },
    { id: 2, team_id: 3, points: getRandomNumber(0, 7*15*100) },
    { id: 2, team_id: 4, points: getRandomNumber(0, 7*15*100) },
    { id: 3, team_id: 1, points: getRandomNumber(0, 7*15*100) },
    { id: 3, team_id: 2, points: getRandomNumber(0, 7*15*100) },
    { id: 3, team_id: 3, points: getRandomNumber(0, 7*15*100) },
    { id: 3, team_id: 4, points: getRandomNumber(0, 7*15*100) },
    { id: 4, team_id: 1, points: getRandomNumber(0, 7*15*100) },
    { id: 4, team_id: 2, points: getRandomNumber(0, 7*15*100) },
    { id: 4, team_id: 3, points: getRandomNumber(0, 7*15*100) },
    { id: 4, team_id: 4, points: getRandomNumber(0, 7*15*100) },
    { id: 5, team_id: 1, points: getRandomNumber(0, 7*15*100) },
    { id: 5, team_id: 2, points: getRandomNumber(0, 7*15*100) },
    { id: 5, team_id: 3, points: getRandomNumber(0, 7*15*100) },
    { id: 5, team_id: 4, points: getRandomNumber(0, 7*15*100) }
];

export async function getActivityScoresByActivityId(id: number): Promise<Score[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return SCORES.filter(value => value.id === id);
}
