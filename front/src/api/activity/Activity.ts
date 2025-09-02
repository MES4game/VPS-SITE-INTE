import { Activity } from "@/shared/models/activity/Activity";

const ACTIVITIES: Activity[] = [
    { id: 1, title: 'CIA', description: 'Description of activity 1 with markdown' },
    { id: 2, title: 'activity 2', description: 'Description of activity 2 with markdown' },
    { id: 3, title: 'activity 3', description: 'Description of activity 3 with markdown' },
    { id: 4, title: 'activity 4', description: 'Description of activity 4 with markdown' },
    { id: 5, title: 'activity 5', description: 'Description of activity 5 with markdown' },
    { id: 6, title: 'activity 6', description: 'Description of activity 6 with markdown' },
    { id: 7, title: 'activity 7', description: 'Description of activity 7 with markdown' },
    { id: 8, title: 'activity 8', description: 'Description of activity 8 with markdown' },
    { id: 9, title: 'activity 9', description: 'Description of activity 9 with markdown' },
    { id: 10, title: 'activity 10', description: 'Description of activity 10 with markdown' },
    { id: 11, title: 'activity 11', description: 'Description of activity 11 with markdown' },
    { id: 12, title: 'activity 12', description: 'Description of activity 12 with markdown' },
    { id: 13, title: 'activity 13', description: 'Description of activity 13 with markdown' },
    { id: 14, title: 'activity 14', description: 'Description of activity 14 with markdown' },
    { id: 15, title: 'activity 15', description: 'Description of activity 15 with markdown' }
]

export async function getActivities(): Promise<Activity[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return ACTIVITIES;
}

export async function getActivity(id: number): Promise<Activity | undefined> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return ACTIVITIES.find((value) => { return value.id === id });
}
