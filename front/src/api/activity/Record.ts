import { Record, RECORD_SCHEMA } from "@/shared/models/activity/Record";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "../common/Fetch";

export async function getRecordsByActivityId(id: number): Promise<Record[]> {
    const data: Record[] = await fetchData(`/activity/record/getByActivity/${id.toString()}`) as Record[];
    return data.map((value) => rawObjToSchema(value, RECORD_SCHEMA));
}
