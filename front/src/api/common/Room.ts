import { Room, ROOM_SCHEMA } from "@/shared/models/common/Room";
import { rawObjToSchema } from "@/shared/utils/common/Transform";
import { fetchData } from "@/api/common/Fetch";

export async function getRooms(): Promise<Room[]> {
    const data: Room[] = await fetchData("/room/getAll") as Room[];
    return data.map((value) => rawObjToSchema(value, ROOM_SCHEMA));
}
