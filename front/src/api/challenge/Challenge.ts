import { Challenge, CHALLENGE_SCHEMA } from "@/shared/models/challenge/Challenge";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "../common/Fetch";

export async function getChallenges(): Promise<Challenge[]> {
    const data: Challenge[] = await fetchData("/challenge/getAll") as Challenge[];
    return data.map((value) => rawObjToSchema(value, CHALLENGE_SCHEMA));
}
