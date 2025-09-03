import { Slot, SLOT_SCHEMA } from "@/shared/models/common/Slot";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "@/api/common/Fetch";

export async function getSlots(): Promise<Slot[]> {
    const data: Slot[] = await fetchData("/slot/getAll") as Slot[];
    return data.map((value) => rawObjToSchema(value, SLOT_SCHEMA));
}
