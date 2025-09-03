import { FC, ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useGeneralVars } from "@/shared/contexts/common/GeneralVars";
import { useSmartRef } from "@/shared/utils/common/SmartHook";
import { Score } from "@/shared/models/common/Score";
import { Challenge } from "@/shared/models/challenge/Challenge";
import { getChallengeScores } from "@/api/challenge/ChallengeScore";
import { getChallenges } from "@/api/challenge/Challenge";
import TableComp from "@/ui/components/common/TableComp";
import ScoreboardComp from "@/ui/components/common/ScoreboardComp";
import "@/ui/pages/challenge/ChallengePage.css";

const ChallengePage: FC = (): ReactNode => {
    const { teams } = useGeneralVars();
    const [render_value, setRender] = useState<boolean>(false);

    function reRender() { setRender(!render_value); }

    const scores = useSmartRef<Score[]>([]);
    const challenges = useSmartRef<Challenge[]>([]);

    useEffect(() => {
        getChallengeScores()
            .then(scores.set)
            .catch(console.log);

        getChallenges()
            .then(challenges.set)
            .catch(console.log);
        console.log(teams.get());
    }, []);

    const [sorted_teams, setSortedTeams] = useState([...teams.get()].sort((a, b) => (a.id > b.id ? 1 : -1)));

    scores.subscribe(reRender)
    challenges.subscribe(reRender);
    teams.subscribe(() => {
        setSortedTeams([...teams.get()].sort((a, b) => (a.id > b.id ? 1 : -1)));
        reRender();
    });

    function displayRowChallenge(challenge: Challenge, index: number) {
        return (
            <tr key={index}>
                <td>{challenge.title}</td>
                <td>{challenge.points}</td>
                <td>{challenge.max_done}</td>
                {sorted_teams.map((value) => <td>{challenge.done.get(value.id.toString()) ?? 0}</td>)}
            </tr>
        );
    }

    useEffect(() => {
        console.log("Loaded: ChallengePage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ChallengePage");
    });

    return (
        <div className={"challenge-container"}>
            <h2>Description</h2>
            <ReactMarkdown>TODO: add description for challenges</ReactMarkdown>
            <hr />
            <h2>Score</h2>
            <ScoreboardComp scores={scores} />
            <hr />
            <h2>Passage</h2>
            <TableComp<Challenge>
                elements={challenges}
                default_sorting_field={'id'}
                heads={[
                    { key: 'id', value: 'Défi' },
                    { key: 'points', value: 'Points' },
                    { key: 'max_done', value: 'Maximum' },
                    ...sorted_teams.map((value) => { return { value: value.name, color: value.color }; })
                ]}
                displayRowElement={displayRowChallenge}
            />
        </div>
    );
}

export default ChallengePage;
