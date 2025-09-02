import { Score } from "@/shared/models/common/Score";
import { getRandomNumber } from "@/shared/utils/common/Random";

const SCORES: Score[] = [
    { team_id: 1, points: getRandomNumber(0, 20000) },
    { team_id: 2, points: getRandomNumber(0, 20000) },
    { team_id: 3, points: getRandomNumber(0, 20000) },
    { team_id: 4, points: getRandomNumber(0, 20000) }
];

export async function getResultScores(): Promise<Score[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return SCORES;
}
