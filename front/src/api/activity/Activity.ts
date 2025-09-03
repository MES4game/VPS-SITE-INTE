import { Activity, ACTIVITY_SCHEMA } from "@/shared/models/activity/Activity";
import { fetchData } from "@/api/common/Fetch";
import { rawObjToSchema } from "@/shared/utils/common/Transform";

export async function getActivities(): Promise<Activity[]> {
    const data: Activity[] = await fetchData("/activity/getAll") as Activity[];
    return data.map((value) => rawObjToSchema(value, ACTIVITY_SCHEMA));
}

export async function getActivity(id: number): Promise<Activity> {
    const data: Activity = await fetchData(`/activity/getById/${id.toString()}`) as Activity;
    return rawObjToSchema(data, ACTIVITY_SCHEMA);
}
