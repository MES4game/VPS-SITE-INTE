import { Score, SCORE_SCHEMA } from "@/shared/models/common/Score";
import { fetchData } from "../common/Fetch";
import { rawObjToSchema } from "@/shared/utils/common/Transform";

export async function getActivityScoresByActivityId(id: number): Promise<Score[]> {
    const data: Score[] = await fetchData(`/activity/scores/getByActivity/${id.toString()}`) as Score[];
    return data.map((value) => rawObjToSchema(value, SCORE_SCHEMA));
}
