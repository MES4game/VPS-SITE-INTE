import { FC, ReactNode, useEffect, useState } from "react";
import { Activity } from "@/shared/models/activity/Activity";
import { getActivities, getActivity } from "@/api/activity/Activity";
import ActivityDisplay from "@/ui/components/activity/ActivityDisplay";
import "@/ui/pages/activity/ActivityPage.css";

const ActivityPage: FC = (): ReactNode => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [activity, setActivity] = useState<Activity | undefined>(undefined);
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        getActivities()
            .then(setActivities)
            .catch(console.log);
    }, []);

    useEffect(() => {
        if (selected === 0) return;
        getActivity(selected)
            .then(setActivity)
            .catch(console.log);
    }, [selected]);

    useEffect(() => {
        console.log("Loaded: ActivityPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ActivityPage");
    });

    return (
        <div className="activity-container">
            <div className="activity-selector">
                {activities.map((value) => (
                    <button
                        className={value.id === selected ? 'selected' : ''}
                        onClick={() => { setSelected(value.id) }}
                        key={value.id}
                    >
                        {value.title}
                    </button>
                ))}
            </div>
            {
                activity
                ? <ActivityDisplay activity={activity} />
                : <h1 className='activity-no-selection'>Vous devez sélectionner une activité.</h1>
            }
        </div>
    );
}

export default ActivityPage;
