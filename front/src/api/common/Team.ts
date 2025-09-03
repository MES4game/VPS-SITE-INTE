import { Team, TEAM_SCHEMA } from "@/shared/models/common/Team";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "@/api/common/Fetch";

export async function getTeams(): Promise<Team[]> {
    const data: Team[] = await fetchData("/team/getAll") as Team[];
    return data.map((value) => rawObjToSchema(value, TEAM_SCHEMA));
}
