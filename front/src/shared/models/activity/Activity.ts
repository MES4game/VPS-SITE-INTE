import { SchemaType } from "@/shared/utils/common/Transform";

export interface Activity {
    id: number;
    title: string;
    description?: string;
}

export const ACTIVITY_SCHEMA: SchemaType<Activity> = {
    id: 0,
    title: "",
    description: ""
}
