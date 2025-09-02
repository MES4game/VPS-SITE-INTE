import { FC, ReactNode, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { ComponentProps } from "@/shared/models/common/Props";
import { Activity } from "@/shared/models/activity/Activity";
import { Score } from "@/shared/models/common/Score";
import { Record } from "@/shared/models/activity/Record";

import { useSmartRef } from "@/shared/utils/common/SmartHook";

import { getActivityScoresByActivityId } from "@/api/activity/ActivityScore";
import { getRecordsByActivityId } from "@/api/activity/Record";

import ScoreboardComp from "@/ui/components/common/ScoreboardComp";
import Records from "@/ui/components/activity/Records";

import "@/ui/components/activity/ActivityDisplay.css";

interface ActivityDisplayProps extends ComponentProps {
    activity: Activity;
}

const ActivityDisplay: FC<ActivityDisplayProps> = (props: ActivityDisplayProps): ReactNode => {
    const scores = useSmartRef<Score[]>([]);
    const records = useSmartRef<Record[]>([]);

    getActivityScoresByActivityId(props.activity.id)
        .then(scores.set)
        .catch(console.log);

    getRecordsByActivityId(props.activity.id)
        .then(records.set)
        .catch(console.log);

    useEffect(() => {
        console.log("Loaded: ActivityDisplay");
    }, []);

    useEffect(() => {
        console.log("Rendered: ActivityDisplay");
    });

    return (
        <div className={`activity-display ${props.className ?? ''}`} style={props.style}>
            <h2>Description</h2>
            <ReactMarkdown>{props.activity.description}</ReactMarkdown>
            <hr />
            <h2>Score</h2>
            <ScoreboardComp activity_id={props.activity.id} scores={scores} />
            <hr />
            <h2>Passage</h2>
            <Records records={records} />
        </div>
    );
}

export default ActivityDisplay;
