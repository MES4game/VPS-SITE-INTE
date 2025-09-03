import { Score, SCORE_SCHEMA } from "@/shared/models/common/Score";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "../common/Fetch";

export async function getResultScores(): Promise<Score[]> {
    const data: Score[] = await fetchData("/result/scores/getAll") as Score[];
    return data.map((value) => rawObjToSchema(value, SCORE_SCHEMA));
}
